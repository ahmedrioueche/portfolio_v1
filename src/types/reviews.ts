export interface IReview {
  _id: string;
  rating: number;
  hire: boolean;
  comment: string;
  author: string;
  createdAt: string;
}

export interface ReviewCreate {
  rating: number;
  hire: boolean;
  comment: string;
  author: string;
  createdAt: string;
}

export interface ReviewUpdate {
  rating?: number;
  hire?: boolean;
  comment?: string;
  author?: string;
}
