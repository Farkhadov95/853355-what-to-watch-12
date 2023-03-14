import { Films} from '../types/films';
import { reviews } from './reviews';

export const films: Films = [
  {
    id: 1,
    name: 'Aviator',
    year: 2004,
    genre: 'Drama',
    description: {
      info: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
      director: 'Martin Scorsese',
      cast: ['Leonardo DiCaprio', 'Cate Blanchett'],
    },
    rating: {
      ratingTotal: 7.5,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'Aviator'),
    },
    imgSrc: 'img/aviator.jpg'
  },
  {
    id: 2,
    name: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Comedy',
    description: {
      info: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
      director: 'Wes Andreson',
      cast: ['Ralph Fiennes', 'F. Murray Abraham'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/the-grand-budapest-hotel-poster.jpg'
  },
  {
    id: 3,
    name: 'Macbeth',
    year: 2016,
    genre: 'Drama',
    description: {
      info: 'Harry Potter universe movie',
      director: 'Steven Spilberg',
      cast: ['Michael Fassbender', 'Marion Cotillard'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/macbeth.jpg'
  },
  {
    id: 4,
    name: 'Shutter Island',
    year: 2017,
    genre: 'Drama',
    description: {
      info: 'Classic DiCaprio movie with a good plot twist',
      director: 'Martin Scorsese',
      cast: ['Leonardo DiCaprio', 'Mark Ruffalo'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/shutter-island.jpg'
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    year: 2018,
    genre: 'Drama',
    description: {
      info: 'Harry Potter universe movie',
      director: 'Steven Spilberg',
      cast: ['Harry', 'Ron'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    id: 6,
    name: 'What We Do in the Shadows',
    year: 2019,
    genre: 'Comedy',
    description: {
      info: 'Harry Potter universe movie',
      director: 'Steven Spilberg',
      cast: ['Taika Waititi', 'Someone Else'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    id: 7,
    name: 'Revenant',
    year: 2020,
    genre: 'Drama',
    description: {
      info: 'Harry Potter universe movie',
      director: 'Steven Spilberg',
      cast: ['Leonardo DiCaprio', 'Tom Hardy'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/revenant.jpg'
  },
  {
    id: 8,
    name: 'Johnny English',
    year: 2021,
    genre: 'Comedy',
    description: {
      info: 'Harry Potter universe movie',
      director: 'Steven Spilberg',
      cast: ['Harry', 'Ron'],
    },
    rating: {
      ratingTotal: 7,
      ratingCategory: 'Good',
      ratingVotes: 300,
      reviews: reviews.filter((review) => review.movieName === 'The Grand Budapest Hotel'),
    },
    imgSrc: 'img/johnny-english.jpg'
  }


];
