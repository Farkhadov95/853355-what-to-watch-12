import { films } from '../../mocks/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  hoveredFilmId: number;
  overHandler: (id: number) => void;
  OutHandler: () => void;
}

function FilmCards({hoveredFilmId, overHandler, OutHandler}: FilmCardsProps): JSX.Element {
  return (
    // films.map((filmItem) =>
    //   (
    //     <FilmCard
    //       key={filmItem.id}
    //       film={filmItem}
    //       isHovered={hoveredFilmId === filmItem.id}
    //       mouseOverHandler={overHandler}
    //       mouseOutHandler={OutHandler}
    //     />
    //   ))
    <>
    </>
  );
}

export default FilmCards;
