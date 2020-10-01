import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
})()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
