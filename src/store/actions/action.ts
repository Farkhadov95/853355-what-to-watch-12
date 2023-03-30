import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction<string>('set_genre');
