import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Film, Films, Reviews } from '../../types/films';

export const setGenre = createAction<string>('set_genre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadSimilar = createAction<Films>('data/loadSimilar');
export const loadReviews = createAction<Reviews>('data/loadReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
