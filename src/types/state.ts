import {store} from '../store';
import { AuthorizationStatus } from '../const';
import { Film, Films, Reviews } from './films';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
}

export type FilmsData = {
    genre: string;
    film: Film | null;
    films: {
      filmsArray: Films;
      similarFilms: Films;
      isFilmsDataLoading: boolean;
      isReviewSending: boolean;
    };
    reviews: Reviews;
    error: string | null;
  }

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
