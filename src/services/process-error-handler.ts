import {store} from '../store';
import {clearErrorAction} from '../store/actions/api-actions';
import { setError } from '../store/films-data/films-data';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
