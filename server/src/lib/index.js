import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const getCurrentUser = (request) => {
  dotenv.config();

  const auth = request.get("Authorization");

  if (!auth) {
    throw new Error("🙅🏽‍♂️ Not authenticated!");
  }

  const token = auth.replace("Bearer ", "");
  return jwt.verify(token, process.env.APP_SECRET);
};
