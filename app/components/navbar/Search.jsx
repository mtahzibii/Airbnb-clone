"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex justify-between items-center gap-3 border-[1px] rounded-full px-2 py-1  w-full md:w-auto ">
      <div className="font-semibold px-3 ">Anywhere</div>
      <div className="hidden sm:block  font-semibold px-3 border-x-[1px] flex-1 text-center">
        Any week
      </div>
      <div className="flex items-center justify-center gap-3 text-sm text-gray-600 pl-4">
        <div className="hidden sm:block">Add Guests</div>
        <div className="flex justify-center items-center bg-rose-500 rounded-full p-2 text-white">
          <BiSearch className="" color="white" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
