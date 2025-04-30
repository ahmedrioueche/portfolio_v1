import { ApiResponse } from "@/types/common";
import { ContactFormData } from "@/types/contact";

export const sendContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};
