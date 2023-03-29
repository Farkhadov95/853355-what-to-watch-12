import { createReducer } from '@reduxjs/toolkit';
import { films } from '../../mocks/films';
import { Films } from '../../types/films';
import { changeGenre, resetGenre } from '../actions/action';

type State = {
  genre: string;
  films: Films;
}

const initialState: State = {
  genre: 'All genres',
  films: films
};

// eslint-disable-next-line no-console
// console.log();

// function filterMoviesByGenre(genre: string): Films {
//   const filteredMovies = films.filter((movie) => movie.genre === genre);
//   // eslint-disable-next-line no-console
//   console.log(filteredMovies);
//   return filteredMovies;
// }


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      state.genre = 'Comedy';
    })
    .addCase(resetGenre, (state) => {
      state.genre = 'All genres';
    });
});

export {reducer};
