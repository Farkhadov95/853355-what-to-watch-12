import { NameSpace } from '../const';
import { Films, Reviews } from '../types/films';
import { State } from '../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Data].films.filmsArray;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Data].films.similarFilms;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getIsFilmsLoading = (state: State) => state[NameSpace.Data].films.isFilmsDataLoading;
export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getGenre = (state: State) => state[NameSpace.Data].genre;
export const getError = (state: State): string | null => state[NameSpace.Data].error;
