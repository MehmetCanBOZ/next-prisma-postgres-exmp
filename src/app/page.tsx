import prisma from "@/app/lib/prisma";

const page = async () => {
  const data = await prisma.user.findMany();

  return (
    <div>
      {data.map((user: any) => (
        <>
          <div key={user.id}>{user.name}</div>
          <div key={user.id}>{user.email}</div>
        </>
      ))}
    </div>
  );
};

export default page;
