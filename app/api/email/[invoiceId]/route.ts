import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ invoiceId: string }> }
) {
  const session = await requireUser();

  const { invoiceId } = await params;

  if (!invoiceId) {
    return NextResponse.json(
      { success: false, message: "invoiceId Not Valid" },
      { status: 401 }
    );
  }

  try {
    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json(
        { success: false, message: "invoice not found" },
        { status: 404 }
      );
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Mohamed Salah",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "mohamed.salah201982@gmail.com" }],
      template_uuid: "8956363c-59c6-4772-9361-2ee3788d1b64",
      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "Invoice Mohamed Salah",
        company_info_address: "88 st cairo",
        company_info_city: "cairo",
        company_info_zip_code: "345874",
        company_info_country: "EGYPT",
      },
    });

    return NextResponse.json(
      { success: true, message: "invoice is updated successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
