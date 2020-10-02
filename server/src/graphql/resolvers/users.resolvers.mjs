import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export default {
  Query: {
    login: async (_, { email, password }, { prisma }) => {
      const user = await prisma.user.findOne({ where: { email } });
      if (!user) {
        throw new Error("🙅🏽‍♂️ No such user found!");
      }

      const validated = await bcrypt.compare(password, user.password);
      if (!validated) {
        throw new Error("🙅🏽‍♂️ Invalid password!");
      }

      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

      return { token, user };
    },
  },

  Mutation: {
    signup: async (_, args, { prisma }) => {
      const hashedPass = await bcrypt.hash(args.password, 10);
      const newUser = prisma.user.create({ data: { ...args, hashedPass } });
      const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET);

      return { token, newUser };
    },
  },
};
