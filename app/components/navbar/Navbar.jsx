"use client";

import Search from "./Search";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 top-0 fixed w-full bg-white z-10 shadow-sm gap-3 md:gap-0">
      <Logo />
      <Search />
      <UserMenu />
    </nav>
  );
};

export default Navbar;
