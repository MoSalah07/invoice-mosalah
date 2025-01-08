import CreateInvoice from "@/app/components/CreateInvoice";
import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import React from "react";

async function getUserData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
      email: true,
    },
  });

  return data;
}

export default async function CreateInvoicePage() {
  const session = await requireUser();
  const user = await getUserData(session?.user?.id as string);

  return (
    <>
      <CreateInvoice
        firstName={user?.firstName as string}
        lastName={user?.lastName as string}
        email={user?.email as string}
        address={user?.address as string}
      />
    </>
  );
}
