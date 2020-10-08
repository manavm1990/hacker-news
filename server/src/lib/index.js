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

  const { userId } = jwt.verify(token, process.env.APP_SECRET);

  return userId;
};
