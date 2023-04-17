import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../../const';
import { Films, Reviews } from '../../types/films';
import { loadFilm, loadFilms, loadReviews, requireAuthorization, setError, setFilmsDataLoadingStatus, setGenre } from '../actions/action';

type InitialState = {
  genre: string;
  films: {
   filmsData: Films;
   isFilmsDataLoading: boolean;
  };
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  films: {
    filmsData: [],
    isFilmsDataLoading: false,
  },
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films.filmsData = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      const {id, isFavorite} = action.payload;
      const film = state.films.filmsData.find((filmItem) => filmItem.id === id);
      if (film) {
        film.isFavorite = isFavorite;
      }
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.films.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
