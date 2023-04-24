import {store} from '../store';
import { setError } from '../store/films-data/films-data';
import {clearErrorAction} from '../store/actions/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
