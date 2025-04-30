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

export const useReviews = () => {
  const queryClient = useQueryClient();

  const reviewsQuery = useQuery<IReview[], Error>({
    queryKey: ["reviews"],
    queryFn: getReviews,
    staleTime: 1000 * 60 * 5,
  });

  const useReviewById = (id: string) => {
    return useQuery<IReview, Error>({
      queryKey: ["reviews", id],
      queryFn: () => getReviewById(id),
      enabled: !!id,
    });
  };

  const createReviewMutation = useMutation<IReview, Error, ReviewCreate>({
    mutationFn: createReview,
    onSuccess: (newReview) => {
      console.log("newReview", newReview);
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const updateReviewMutation = useMutation<
    ApiResponse,
    Error,
    { id: string; updates: ReviewUpdate }
  >({
    mutationFn: ({ id, updates }) => updateReview(id, updates),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviews", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const deleteReviewMutation = useMutation<ApiResponse, Error, string>({
    mutationFn: deleteReview,
    onSuccess: (_, id) => {
      queryClient.setQueryData<IReview[]>(["reviews"], (old) =>
        old?.filter((review) => review._id !== id)
      );
    },
  });

  return {
    reviewsQuery,
    useReviewById,

    createReviewMutation,
    updateReviewMutation,
    deleteReviewMutation,

    getReviewById: (id: string) => queryClient.getQueryData(["reviews", id]),
    getAllReviews: () => queryClient.getQueryData(["reviews"]),
  };
};
