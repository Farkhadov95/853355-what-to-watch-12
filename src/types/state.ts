import { AuthorizationStatus } from '../const';
import {store} from '../store';
import { Films, Reviews } from './films';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type FilmsData = {
    genre: string;
    films: {
      filmsArray: Films;
      similarFilms: Films;
      isFilmsDataLoading: boolean;
    };
    reviews: Reviews;
    error: string | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
