import { State } from '../types/state';

export const filmSelector = (state: State) => state.films;
export const genreSelector = (state: State) => state.genre;
