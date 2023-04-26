import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppRoute, DEFAULT_GENRE, ErrorMessages, NameSpace } from '../../const';
import { AppDispatch, FilmsData, State } from '../../types/state';
import { Film, Films, PostReview, Reviews } from '../../types/films';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from '../actions/action';

const initialState: FilmsData = {
  genre: DEFAULT_GENRE,
  film: null,
  films: {
    filmsArray: [],
    similarFilms: [],
    isFilmsDataLoading: false,
    isReviewSending: false,
  },
  reviews: [],
  error: null,
};

export const fetchFilmsDataAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Films>('/films');
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, {id:number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async({id}, {extra: api}) => {
    const {data} = await api.get<Films>(`/films/${id}/similar`);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, {id:number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async({id}, {extra: api}) => {
    const {data} = await api.get<Film>(`/films/${id}`);
    return data;
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async(id, {extra: api}) => {
    const {data} = await api.get<Reviews>(`/comments/${id}`);
    return data;
  },
);

export const setFavoriteStatusAction = createAsyncThunk<Film, {id:number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFilmStatus',
  async({id, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`/favorite/${id}/${status}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<Reviews, {id: number; review: PostReview}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async({id, review}, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(`/comments/${id}`, review);
    dispatch(redirectToRoute(`${AppRoute.Films}/${id}` as AppRoute));
    return data;
  },
);

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setGenre: (state, action: {payload: string}) => {
      state.genre = action.payload;
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
      .addCase(fetchFilmsDataAction.fulfilled, (state, action) => {
        state.films.filmsArray = action.payload;
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsDataAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
        state.error = ErrorMessages.FILMS_LOAD;
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
        state.error = ErrorMessages.FILMS_LOAD;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
        state.error = ErrorMessages.FILM_LOAD;
      })
      .addCase(fetchFilmReviewsAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.films.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmReviewsAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
        state.error = ErrorMessages.REVIEWS_LOAD;
      })
      .addCase(setFavoriteStatusAction.pending, (state) => {
        state.films.isFilmsDataLoading = true;
      })
      .addCase(setFavoriteStatusAction.fulfilled, (state, action) => {
        const {id, isFavorite} = action.payload;
        const film = state.films.filmsArray.find((filmItem) => filmItem.id === id);
        if (film) {
          film.isFavorite = isFavorite;
        }
        state.films.isFilmsDataLoading = false;
      })
      .addCase(setFavoriteStatusAction.rejected, (state) => {
        state.films.isFilmsDataLoading = false;
        state.error = ErrorMessages.FAVORITE_STATUS_CHANGE;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.films.isReviewSending = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.films.isReviewSending = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.films.isReviewSending = false;
        state.error = ErrorMessages.REVIEW_SEND;
      });
  },
});

export const { setGenre, setFilmsDataLoadingStatus, setError } = filmsData.actions;
