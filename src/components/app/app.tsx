import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  filmsCount: number;
  mainFilm: string;
  mainGenre: string;
  mainYear: number;
}

function App({filmsCount, mainFilm, mainGenre, mainYear}: MainScreenProps): JSX.Element {
  return (
    <MainScreen
      filmsCount = {filmsCount}
      mainFilm = {mainFilm}
      mainGenre = {mainGenre}
      mainYear = {mainYear}
    />
  );
}

export default App;
