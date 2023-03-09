import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ReviewScreen from '../../pages/review-screen/review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import PlayerScreen from '../../pages/player-screen.tsx/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type MainScreenProps = {
  filmsCount: number;
  mainFilm: string;
  mainGenre: string;
  mainYear: number;
}

function App({filmsCount, mainFilm, mainGenre, mainYear}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              filmsCount = {filmsCount}
              mainFilm = {mainFilm}
              mainGenre = {mainGenre}
              mainYear = {mainYear}
            />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <ReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <SignInScreen />
          }
        />
        <Route
          path='*'
          element={
            <NotFoundScreen />
          }
        />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
