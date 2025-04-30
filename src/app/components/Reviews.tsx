"use client";
import { useReviews } from "@/hooks/query/useReviews";
import { Review } from "./ui/Review";
import { IReview } from "@/types/reviews";

export const Reviews = () => {
  const { reviewsQuery, updateReviewMutation, deleteReviewMutation } =
    useReviews();

  const handleDelete = async (reviewId: string) => {
    try {
      deleteReviewMutation.mutate(reviewId);
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  const handleEdit = async (
    reviewId: string,
    updatedData: { comment: string }
  ) => {
    try {
      updateReviewMutation.mutate({
        id: reviewId,
        updates: { comment: updatedData.comment },
      });
    } catch (error) {
      console.error("Failed to update review:", error);
    }
  };

  return (
    <section id="comments" className="py-12 bg-gray-900">
      <div className="container mx-auto">
        {reviewsQuery?.data && reviewsQuery?.data.length > 0 && (
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold relative inline-block group">
              Reviews
              <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </h2>
          </div>
        )}

        <div className="mx-auto">
          {reviewsQuery?.isLoading ? (
            <div className="text-center text-gray-400 py-8">
              Loading reviews...
            </div>
          ) : reviewsQuery?.isError ? (
            <div className="text-center text-red-400 py-8">
              Error loading reviews: {reviewsQuery?.error?.message}
            </div>
          ) : reviewsQuery?.data && reviewsQuery?.data?.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No reviews yet. Be the first to leave feedback!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewsQuery?.data?.map((review: IReview) => (
                <Review
                  key={review._id}
                  id={review._id}
                  author={review.author}
                  text={review.comment}
                  rating={review.rating}
                  hireability={review.hire}
                  timestamp={new Date(review.createdAt).toLocaleString()}
                  onEdit={(id, newText) => handleEdit(id, { comment: newText })}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
