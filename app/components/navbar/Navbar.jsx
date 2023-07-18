"use client";

import Search from "./Search";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import Categories from "./Categories";

const Navbar = ({ currentUser }) => {
  return (
    <div className="w-full bg-white z-10 ">
      <nav className="flex justify-between items-center px-12 py-6  w-full bg-white z-10 shadow-sm gap-3 md:gap-0">
        <Logo />
        <Search />
        <UserMenu currentUser={currentUser} />
      </nav>
      <Categories />
    </div>
  );
};

export default Navbar;
