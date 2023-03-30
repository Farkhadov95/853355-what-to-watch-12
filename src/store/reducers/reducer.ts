import { createReducer } from '@reduxjs/toolkit';
import { films } from '../../mocks/films';
import { Films } from '../../types/films';
import { setGenre } from '../actions/action';

type State = {
  genre: string;
  films: Films;
}

const initialState: State = {
  genre: 'All genres',
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
