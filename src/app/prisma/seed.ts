const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: "alice@example.com",
      name: "Alice",
      password: "securepassword123",
    },
  });

  console.log(`Created user: ${user1.email}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
