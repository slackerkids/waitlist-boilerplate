import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Email Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Inserting email to supabase
    const { error, statusText, status } = await supabase
      .from("waitlist")
      .insert([{ email: email.toLowerCase() }]);

    // Handling repeated submission
    if (error?.code === "23505") {
      return NextResponse.json(
        { message: "You're already on waitlist!" },
        { status: 400 }
      );
    }

    // Return final response
    return NextResponse.json({ message: "Thank you for joining our waitlist! We'll notify you when we launch. Keep an eye on your inbox for updates and exclusive offers." });
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
