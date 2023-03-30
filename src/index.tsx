import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';

const MainScreenSettings = {
  MainFilm: 'The Grand Budapest Hotel',
  MainGenre: 'Drama',
  MainYear: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        mainFilm = {MainScreenSettings.MainFilm}
        mainGenre = {MainScreenSettings.MainGenre}
        mainYear = {MainScreenSettings.MainYear}
      />
    </Provider>
  </React.StrictMode>,
);
