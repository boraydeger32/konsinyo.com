import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Lutfen tum alanlari doldurun." },
        { status: 400 }
      );
    }

    // TODO: Burada e-posta gonderimi veya veritabani kaydi yapilabilir
    // Ornegin: Resend, Nodemailer, Supabase, Prisma vb.
    console.log("Yeni iletisim formu:", { name, email, subject, message });

    return NextResponse.json({ success: true, message: "Mesajiniz alindi." });
  } catch {
    return NextResponse.json(
      { error: "Bir hata olustu." },
      { status: 500 }
    );
  }
}
