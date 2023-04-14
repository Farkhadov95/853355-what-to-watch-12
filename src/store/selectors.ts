import { State } from '../types/state';

export const filmSelector = (state: State) => state.films;
export const reviewsSelector = (state: State) => state.reviews;
export const genreSelector = (state: State) => state.genre;
export const authorizationStatusSelector = (state: State) => state.authorizationStatus;
export const isFilmsLoadingSelector = (state: State) => state.films.isFilmsDataLoading;
export const errorSelector = (state: State) => state.error;
