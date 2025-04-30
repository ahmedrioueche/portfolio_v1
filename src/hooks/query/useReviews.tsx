import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "@/api/reviews";
import { IReview, ReviewCreate, ReviewUpdate } from "@/types/reviews";
import { ApiResponse } from "@/types/common";
import { useState } from "react";

export const useReviews = () => {
  const queryClient = useQueryClient();

  // Get all reviews with caching
  const reviewsQuery = useQuery<IReview[], Error>({
    queryKey: ["reviews"],
    queryFn: getReviews,
    staleTime: 1000 * 60 * 5, // 5 minutes until data is considered stale
  });

  // Get single review by ID
  const reviewByIdQuery = (id: string) =>
    useQuery<IReview, Error>({
      queryKey: ["reviews", id],
      queryFn: () => getReviewById(id),
      enabled: !!id, // Only run query if ID exists
    });

  const createReviewMutation = useMutation<IReview, Error, ReviewCreate>({
    mutationFn: createReview,
    onSuccess: (newReview) => {
      console.log("newReview", newReview);
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  // Update review mutation
  const updateReviewMutation = useMutation<
    ApiResponse,
    Error,
    { id: string; updates: ReviewUpdate }
  >({
    mutationFn: ({ id, updates }) => updateReview(id, updates),
    onSuccess: (_, variables) => {
      // Invalidate specific review and all reviews list
      queryClient.invalidateQueries({ queryKey: ["reviews", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });

      // Or optimistic update:
      // queryClient.setQueryData<IReview[]>(["reviews"], (old) =>
      //   old?.map((review) =>
      //     review._id === variables.id
      //       ? { ...review, ...variables.updates }
      //       : review
      //   )
      // );
    },
  });

  // Delete review mutation
  const deleteReviewMutation = useMutation<ApiResponse, Error, string>({
    mutationFn: deleteReview,
    onSuccess: (_, id) => {
      // Remove deleted review from cache
      queryClient.setQueryData<IReview[]>(["reviews"], (old) =>
        old?.filter((review) => review._id !== id)
      );
    },
  });

  return {
    // Queries
    reviewsQuery,
    reviewByIdQuery,

    // Mutations
    createReviewMutation,
    updateReviewMutation,
    deleteReviewMutation,
    // Helper functions
    getReviewById: (id: string) => queryClient.getQueryData(["reviews", id]),
    getAllReviews: () => queryClient.getQueryData(["reviews"]),
  };
};
