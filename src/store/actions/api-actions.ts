import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '..';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../../const';
import { deleteToken, setToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { Film, Films, PostReview, Review, Reviews } from '../../types/films';
import { AppDispatch, State } from '../../types/state';
import { UserData } from '../../types/user-data';
import { setError } from '../films-data/films-data';
import { redirectToRoute } from './action';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsDataAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const setFavoriteStatusAction = createAsyncThunk<void, {id:number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFilmStatus',
  async({id, status}, {extra: api}) => {
    await api.post<Film>(`/favorite/${id}/${status}`);
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

export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
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

export const postReviewAction = createAsyncThunk<Review, {id: number; review: PostReview}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async({id, review}, {extra: api}) => {
    const {data} = await api.post<Review>(`/comments/${id}`, review);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    deleteToken();
  },
);
