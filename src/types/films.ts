export type Film = {
    id: number;
    name: string;
    description: FilmDescription;
    rating: Rating;
    year: number;
    genre: string;
    imgSrc: string;
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
    reviewDate: Date;
    reviewer: string;
}

export type Films = Film[];
