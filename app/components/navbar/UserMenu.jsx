"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useStore } from "zustand";

const UserMenu = () => {
  const { isOpen, onClose, onOpen } = useStore(useRegisterModal);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-4">
        <p className="hidden md:block  font-semibold">Airbnb your home</p>
        <div
          className="p-4 md:px-2 md:py-1 flex justify-center items-center gap-3 rounded-full border cursor-pointer hover:shadow-md transition"
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          <AiOutlineMenu />
          <Avatar />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="absolute text-sm top-12 right-0 bg-white border rounded-xl  py-1 shadow-md w-[40vw]
            md:w-[85%] overflow-hidden ">
          <div className="flex flex-col justify-center">
            {!isLoggedIn ? (
              <>
                <MenuItem
                  item="Sign Up"
                  onClick={() => onOpen()}
                  link="/signup"
                />
                <MenuItem item="Login" link="/trips" onClick={() => {}} />
                <hr />
                <MenuItem
                  item="Airbnb your home"
                  onClick={() => router.push("/airbnb")}
                />
              </>
            ) : (
              <>
                <MenuItem
                  item="my trips"
                  onClick={() => router.push("/trips")}
                  link="/trips"
                />
                <MenuItem
                  item="my favorites"
                  link="/trips"
                  onClick={() => {}}
                />
                <MenuItem
                  item="my reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  item="my properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem
                  item="Airbnb your home"
                  onClick={() => router.push("/airbnb")}
                />
                <hr />
                <MenuItem
                  item="Logout"
                  onClick={() => {
                    signOut();
                  }}>
                  Logout
                </MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
