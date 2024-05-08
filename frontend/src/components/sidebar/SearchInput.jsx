import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />

      <button type="submit" className="btn btn-circle bg-purple-600 ">
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

//Starter Code
// import { IoSearch } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search"
//         className="input input-bordered rounded-full"
//       />

//       <button type="submit" className="btn btn-circle bg-purple-600 ">
//         <IoSearch className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
