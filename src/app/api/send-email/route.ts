import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, mobile, service, city } = body;

    // Validate required fields
    if (!name || !email || !mobile || !service || !city) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email to your inbox
    const { data, error } = await resend.emails.send({
      from: "Colourfull Homes <onboarding@resend.dev>", // You'll need to verify your domain or use this default
      to: "colourfullhomes07@gmail.com", // Your email address
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>City:</strong> ${city}</p>
        <hr>
        <p><small>This email was sent from the Colourfull Homes contact form.</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Service: ${service}
        City: ${city}
        
        This email was sent from the Colourfull Homes contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
