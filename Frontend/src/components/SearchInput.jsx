import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
<input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
<button className="btn btn-circle bg-sky-500 text-black">
<IoSearch className="w-6 h-6 outline-none text-white"/>
</button>
    </form>
      
  )
}
export default SearchInput


// Starter code of SearchInput

// import { IoSearch } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
// <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
// <button className="btn btn-circle bg-sky-500 text-black">
// <IoSearch className="w-6 h-6 outline-none text-white"/>
// </button>
//     </form>
      
//   )
// }

// export default SearchInput