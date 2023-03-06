import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const MainScreenSettings = {
  FilmsCount: 20,
  MainFilm: 'The Grand Budapest Hotel',
  MainGenre: 'Drama',
  MainYear: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmsCount = {MainScreenSettings.FilmsCount}
      mainFilm = {MainScreenSettings.MainFilm}
      mainGenre = {MainScreenSettings.MainGenre}
      mainYear = {MainScreenSettings.MainYear}
    />
  </React.StrictMode>,
);
