import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

async function validateUser(prismaUser, email, pass) {
  const foundUser = await prismaUser.findOne({ where: { email } });
  if (!foundUser) {
    throw new Error("🙅🏽‍♂️ No such user found!");
  }

  const validated = await bcrypt.compare(pass, foundUser.password);
  if (!validated) {
    throw new Error("🙅🏽‍♂️ Invalid password!");
  }
  return foundUser;
}

export default {
  Query: {
    login: (_, { email, password }, { prisma: { user } }) => {
      const validUser = validateUser(user, email, password);
      const token = jwt.sign({ userId: validUser.id }, process.env.APP_SECRET);

      return { token, user: validUser };
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
    userFeed: (parent, _, { prisma: { user } }) =>
      user.findOne({ where: { id: parent.id } }).userFeed(),
  },
};
