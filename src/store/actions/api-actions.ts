import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '..';
import { TIMEOUT_SHOW_ERROR } from '../../const';
import { setError } from '../films-data/films-data';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
