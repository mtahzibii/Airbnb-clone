"use client";

import Image from "next/image";
import Container from "../Container";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-6 top-0 fixed w-full bg-white z-10 shadow-sm">
      <Image src="/images/logo.png" width={100} height={100} alt="logo" />
      <div className="flex justify-center items-center gap-4 border rounded-full px-6 py-2">
        <p className="font-bold border-r-2  pr-2">Anywhere</p>
        <p className="font-bold border-r-2 pr-2">Any week</p>
        <p>Add Guests</p>
        <div className="flex justify-center items-center bg-red-500 rounded-full p-2 ">
          <BsSearch className="" color="white" size={18} />
        </div>
      </div>
      <div>profile</div>
    </nav>
  );
};

export default Navbar;
