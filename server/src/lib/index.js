import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// Will be used by any 'resolver' that requires authentication
export const getCurrentUserId = (request) => {
  // 'auth' contains "User JWT"
  const auth = request.get("Authorization");

  if (!auth) {
    throw new Error("🙅🏽‍♂️ Not authenticated!");
  }

  const token = auth.replace("Bearer ", "");

  // returns 'userId' from JWT
  return jwt.verify(token, process.env.APP_SECRET);
};
