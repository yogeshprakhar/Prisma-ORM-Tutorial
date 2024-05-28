import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  firstname: string,
  lastname: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      password,
    },
  });
  console.log(res);
}
// insertUser("testy@email.com", "Testy", "Sharma", "pass1234");

async function updateUser(email: string, firstname: string, lastname: string) {
  const res = await prisma.user.update({
    where: { email: email },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
}

// updateUser("yogesh@email.com","NotYogesh","Singh")

async function deleteUser(email: string) {
  const res = await prisma.user.delete({
    where: { email },
  });
  console.log(res);
}

deleteUser("yogesh@email.com")
