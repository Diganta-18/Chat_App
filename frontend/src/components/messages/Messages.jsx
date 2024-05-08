import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    // Set a max-height for the div and ensure overflow-auto is applied
    <div className="px-4 flex-1 overflow-auto" style={{ maxHeight: "500px" }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
