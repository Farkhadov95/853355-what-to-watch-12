import {store} from '../store';
import {setError} from '../store/actions/action';
import {clearErrorAction} from '../store/actions/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
