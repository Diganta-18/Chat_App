import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversaton = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversaton) {
      conversaton = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderID: senderId,
      receiverID: receiverId,
      message,
    });

    if (newMessage) {
      conversaton.messages.push(newMessage._id);
    }

    //await conversaton.save();
    //await newMessage.save();

    await Promise.all([conversaton.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error on sending message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userTOChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userTOChatId] },
    }).populate("messages");

    if (!conversation) return res.status(404).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error on getting message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
