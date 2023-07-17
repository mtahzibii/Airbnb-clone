"use client";

import Image from "next/image";
const Avatar = ({ avatarImg }) => {
  return (
    <Image
      src={avatarImg ?? "/images/placeholder.jpg"}
      width={25}
      height={25}
      alt="profile"
      className="rounded-full hidden md:block"
    />
  );
};

export default Avatar;
