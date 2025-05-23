import { generateEmailContent } from "@/utils/helper";
import { mailOptions, transporter } from "../../../lib/nodemailer";
import { CONTACT_MESSAGE_FIELDS } from "@/constants/mail";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await req.json();
    if (!data || !data.firstName || !data.email || !data.message) {
      return new Response(JSON.stringify({ message: "Bad request" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data, CONTACT_MESSAGE_FIELDS),
      subject: "Contact Form Submission",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to send email:", err);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
