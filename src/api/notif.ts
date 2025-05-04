import { ApiResponse } from "@/types/common";

export const sendEmail = async (data: {
  subject: string;
  content: string;
}): Promise<ApiResponse> => {
  const response = await fetch("/api/notif", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};
