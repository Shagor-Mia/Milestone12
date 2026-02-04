"use server";

import bcrypt from "bcryptjs";
import { dbConnection } from "@/lib/dbConnect";

export const postUser = async (payload) => {
  try {
    // 0️⃣ validate
    if (!payload) {
      return { success: false, message: "No data provided" };
    }

    const { name, email, password } = payload;

    if (!name || !email || !password) {
      return {
        success: false,
        message: "All required fields must be filled",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters",
      };
    }
    // 1️⃣ check user exist or not
    const isExist = await dbConnection("users").findOne({
      email: payload.email,
    });

    if (isExist) {
      return {
        success: false,
        message: "User already exists!",
      };
    }

    // 2️⃣ hash password
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    // 3️⃣ create new user object
    const newUser = {
      ...payload,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
    };

    // 4️⃣ insert into database
    const result = await dbConnection("users").insertOne(newUser);

    return {
      success: true,
      message: "New user added successfully",
      userId: result.insertedId.toString(),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
