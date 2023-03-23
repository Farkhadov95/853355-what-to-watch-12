import React from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
}

function FilmCards({films}: FilmCardsProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = React.useState<number | null>(null);

  const handleMouseOver = (id: number) => {
    setActiveFilmId(id);
  };

  const handleMouseOut = () => {
    setActiveFilmId(null);
  };

  return (
    <>
      {films.map((filmItem) => (
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

