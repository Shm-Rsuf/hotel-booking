import { userModel } from "@/app/models/user-model";
import { dbConnect } from "@/services/mongo";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { fname, lname, email, password } = NextRequest.json();

  await dbConnect();
  const salt = bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);

  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashedPassword,
  };
  try {
    await userModel.create(newUser);
    return new NextResponse("user has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
