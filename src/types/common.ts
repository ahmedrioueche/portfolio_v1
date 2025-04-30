export type Language = "en" | "fr" | "ar";

export interface ApiResponse {
  success?: boolean;
  error?: boolean;
  message?: string;
}
