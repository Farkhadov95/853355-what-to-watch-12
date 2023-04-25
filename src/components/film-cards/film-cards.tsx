import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
  currentFilmsCount: number;
}

function FilmCards({films, currentFilmsCount}: FilmCardsProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const handleMouseOver = (id: number) => {
    setActiveFilmId(id);
  };

  const handleMouseOut = () => {
    setActiveFilmId(null);
  };

  //TODO: Stop rerender all cards on mouse over

  return (
    <>
      {films.slice(0, currentFilmsCount).map((filmItem) => (
        <FilmCard
          key={filmItem.id}
          film={filmItem}
          isActive={activeFilmId === filmItem.id}
          mouseOverHandler={handleMouseOver}
          mouseOutHandler={handleMouseOut}
        />
      ))}
    </>
  );
}

export default FilmCards;
