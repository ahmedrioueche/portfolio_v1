import { ApiResponse } from "@/types/common";
import { IReview, ReviewCreate, ReviewUpdate } from "@/types/reviews";
import axios from "axios";

const api = axios.create({
  baseURL: "/api/reviews",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all reviews
export const getReviews = async (): Promise<IReview[]> => {
  const response = await api.get<IReview[]>("/");
  return response.data;
};

// Fetch a single review by ID
export const getReviewById = async (id: string): Promise<IReview> => {
  const response = await api.get<IReview>(`/${id}`);
  return response.data;
};

// Create a new review
export const createReview = async (review: ReviewCreate): Promise<IReview> => {
  const response = await api.post<IReview>("/", review);
  return response.data;
};

// Update an existing review
export const updateReview = async (
  id: string,
  updates: ReviewUpdate
): Promise<ApiResponse> => {
  const response = await api.patch<ApiResponse>(`/${id}`, updates);
  return response.data;
};

// Delete a review
export const deleteReview = async (id: string): Promise<ApiResponse> => {
  const response = await api.delete<ApiResponse>(`/${id}`);
  return response.data;
};
