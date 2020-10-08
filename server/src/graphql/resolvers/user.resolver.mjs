import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export default {
  Query: {
    login: async (_, { email, password }, { prisma: { user } }) => {
      const foundUser = await user.findOne({ where: { email } });
      if (!foundUser) {
        throw new Error("🙅🏽‍♂️ No such user found!");
      }

      const validated = await bcrypt.compare(password, user.password);
      if (!validated) {
        throw new Error("🙅🏽‍♂️ Invalid password!");
      }

      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

      return { token, foundUser };
    },
  },

  Mutation: {
    signup: async (_, args, { prisma: { user } }) => {
      const password = await bcrypt.hash(args.password, 10);
      const newUser = await user.create({
        data: { ...args, password },
      });

      const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET);

      return { token, user: newUser };
    },
  },

  User: {
    userFeed: (parent, _, { prisma }) =>
      prisma.user.findOne({ where: { id: parent.id } }).userFeed(),
  },
};
