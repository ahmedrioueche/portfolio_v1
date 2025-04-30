"use client";

import { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

interface ReviewProps {
  id: string;
  author: string;
  text: string;
  rating: number;
  hireability: boolean;
  timestamp: string;
  isOwner?: boolean;
  onEdit?: (commentId: string, newText: string) => void;
  onDelete?: (commentId: string) => void;
}

export const Review = ({
  id,
  author,
  text,
  rating,
  hireability,
  timestamp,
  isOwner = false,
  onEdit,
  onDelete,
}: ReviewProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [isDeleting, setIsDeleting] = useState(false);
  const [comment, setComment] = useState(text);

  const handleEditSubmit = () => {
    if (editedText.trim() && onEdit) {
      setComment(editedText);
      onEdit(id, editedText);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
      <div className="flex justify-between items-baseline mb-1">
        <h4 className="font-semibold text-white text-lg">
          {author || "Anonymous"}
        </h4>
        <span className="text-sm text-gray-400">{timestamp}</span>
      </div>

      <div className="flex items-center mb-6 gap-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            {i < rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
        <span className="text-gray-400 text-sm">{rating}/5</span>
      </div>

      {isEditing ? (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
          rows={4}
          placeholder="Edit your review..."
        />
      ) : (
        <p className="text-gray-300 mb-6 whitespace-pre-line">{comment}</p>
      )}

      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-300 mr-2">
          Would hire:
        </span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            hireability ? "bg-primary text-gray-100" : "bg-red-900 text-red-300"
          }`}
        >
          {hireability ? "Yes" : "No"}
        </span>
      </div>

      {isOwner && (
        <div className="flex space-x-3 border-t border-gray-700 pt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleEditSubmit}
                className="flex items-center text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded transition-colors duration-200"
              >
                <FaCheck className="mr-2" /> Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex items-center text-sm text-white bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded transition-colors duration-200"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded transition-colors duration-200"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              {isDeleting ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleDelete}
                    className="flex items-center text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded transition-colors duration-200"
                  >
                    <FaCheck className="mr-2" /> Confirm
                  </button>
                  <button
                    onClick={() => setIsDeleting(false)}
                    className="flex items-center text-sm text-white bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded transition-colors duration-200"
                  >
                    <FaTimes className="mr-2" /> Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsDeleting(true)}
                  className="flex items-center text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded transition-colors duration-200"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
