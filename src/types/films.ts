export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: FilmDescription;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type FilmDescription = {
  info: string;
  director: string;
  cast: string[];
}

export type Rating = {
  ratingTotal: number;
  ratingCategory: string;
  ratingVotes: number;
  reviews: Review[];
}

export type Review = {
  movieName: string;
  text: string;
  rating: number;
  ratingCategory: string;
  reviewDate: string;
  reviewer: string;
}

export type Films = Film[];
