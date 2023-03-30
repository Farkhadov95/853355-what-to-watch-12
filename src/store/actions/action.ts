import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction<string>('set_genre');
export const setDefaultGenre = createAction('set_default_genre');
