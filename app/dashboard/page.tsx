import React, { Suspense } from "react";
import { requireUser } from "../utils/hooks";
import DashboardBlocks from "../components/DashboardBlocks";
import InvoiceGraph from "../components/InvoiceGraph";
import RecentInoices from "../components/RecentInoices";
import prisma from "../utils/db";
import EmptyState from "../components/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
    },
  });

  return data;
}

export default async function DashboardPage() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  return (
    <section className="w-full h-full">
      {data.length < 1 ? (
        <EmptyState
          title="No Invoices found"
          description="Create an invoice to see it right here"
          buttontext="Create Invoice"
          href={`/dashboard/invoices/create`}
        />
      ) : (
        <Suspense fallback={<Skeleton className="w-full h-full flex-1" />}>
          <section className="h-[200px]">
            <DashboardBlocks />
          </section>
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-3 md:gap-8 mt-96 md:mt-28 lg:mt-0">
            <InvoiceGraph />
            <RecentInoices />
          </div>
        </Suspense>
      )}
    </section>
  );
}
