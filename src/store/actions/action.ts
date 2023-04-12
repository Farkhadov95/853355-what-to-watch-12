import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Films } from '../../types/films';

export const setGenre = createAction<string>('set_genre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
