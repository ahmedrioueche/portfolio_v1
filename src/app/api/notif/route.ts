import { generateEmailContent } from "@/utils/helper";
import { mailOptions, transporter } from "../../../lib/nodemailer";
import { DEFAULT_MESSAGE_FIELDS } from "@/constants/mail";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await req.json();
    if (!data) {
      return new Response(JSON.stringify({ message: "Bad request" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    console.log("data in POST", data);

    // Generate email content
    const emailContent = generateEmailContent(data, DEFAULT_MESSAGE_FIELDS);

    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject || "Portfolio Notification",
      ...emailContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to send notification email:", err);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
