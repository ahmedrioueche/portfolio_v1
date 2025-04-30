"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { ReviewCreate } from "@/types/reviews";
import { useReviews } from "@/hooks/query/useReviews";

export const Feedback = () => {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hireability, setHireability] = useState(true);
  const [author, setAuthor] = useState("");
  const { createReviewMutation } = useReviews();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const reviewData: ReviewCreate = {
      comment: newComment,
      rating,
      hire: hireability,
      author: author || "Anonymous",
      createdAt: new Date().toISOString(),
    };

    try {
      await createReviewMutation.mutateAsync(reviewData);
      setNewComment("");
      setAuthor("");
      toast.success("Thank you for your feedback!");
    } catch (error) {
      console.error("Failed to post comment:", error);
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <section id="feedback" className="py-16 bg-gray-900 section-offset">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image - left side */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/images/feedback.svg"
            alt="feedback image"
            width={700}
            height={900}
            className="max-w-full h-auto"
          />
        </div>

        {/* Form - right side */}
        <div className="md:w-1/2 w-full flex flex-col justify-center md:px-6 md:pl-12 px-4">
          <div className="flex flex-col items-center mb-12 w-full">
            <h2 className="text-2xl md:text-3xl font-bold relative inline-block group">
              Share Your Feedback
              <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Name Input */}
            <div className="w-full">
              <label className="block text-gray-300 mb-3">
                Your Name (optional)
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                placeholder="Anonymous"
              />
            </div>

            {/* Rating */}
            <div className="w-full">
              <label className="block text-gray-300 mb-3">
                How would you rate my work?
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-3xl focus:outline-none transition-transform hover:scale-110"
                  >
                    {star <= rating ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-400">☆</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Hireability */}
            <div className="w-full">
              <label className="block text-gray-300 mb-3">
                Would you hire me for a project?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      checked={hireability}
                      onChange={() => setHireability(true)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        hireability
                          ? "border-primary bg-primary"
                          : "border-gray-500 bg-gray-700"
                      }`}
                    >
                      {hireability && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-300">Yes</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      checked={!hireability}
                      onChange={() => setHireability(false)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        !hireability
                          ? "border-primary bg-primary"
                          : "border-gray-500 bg-gray-700"
                      }`}
                    >
                      {!hireability && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-300">No</span>
                </label>
              </div>
            </div>

            {/* Feedback Text */}
            <div className="w-full">
              <label className="block text-gray-300 mb-3">Your Feedback</label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                rows={5}
                required
                placeholder="Share your thoughts about my work..."
              />
            </div>

            {/* Submit Button */}
            <div className="space-y-4 w-full">
              <button
                type="submit"
                className="w-full text-white border border-primary bg-primary py-3 px-6 rounded-lg relative group transition-colors duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={createReviewMutation.isPending}
              >
                <div className="flex flex-row justify-center items-center space-x-1">
                  <FaPaperPlane className="mr-3" />
                  <span>
                    {createReviewMutation.isPending ? "Sending..." : "Submit"}
                  </span>
                </div>
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
