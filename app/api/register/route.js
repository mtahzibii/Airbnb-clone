import bcrypt from "bcrypt";
import prismaClient from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 12);

  //   Save in DB
  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
};
