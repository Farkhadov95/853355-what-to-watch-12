import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmsDataAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../actions/api-actions';

const initialState: FilmsData = {
  genre: DEFAULT_GENRE,
  films: {
    filmsArray: [],
    similarFilms: [],
    isFilmsDataLoading: false,
  },
  reviews: [],
  error: null,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setGenre: (state, action: {payload: string}) => {
      state.genre = action.payload;
    },
    loadFilm: (state, action: {payload: {id: number; isFavorite: boolean}}) => {
      const {id, isFavorite} = action.payload;
      const film = state.films.filmsArray.find((filmItem) => filmItem.id === id);
      if (film) {
        film.isFavorite = isFavorite;
      }
    },
    setFilmsDataLoadingStatus: (state, action: {payload: boolean}) => {
      state.films.isFilmsDataLoading = action.payload;
    },
    setError: (state, action: {payload: string | null}) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsDataAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsDataAction.fulfilled, (state, action ) => {
        state.films.filmsArray = action.payload;
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsDataAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.films.similarFilms = action.payload;
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.films.isFilmsDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
      });
  },
});

export const { setGenre, loadFilm, setFilmsDataLoadingStatus, setError } = filmsData.actions;
