import React from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
}

function FilmCards({films}: FilmCardsProps): JSX.Element {
  const [hoveredFilmId, setHoveredFilmId] = React.useState<number | null>(null);


  const handleMouseOver = (id: number) => {
    setHoveredFilmId(id);
  };

  const handleMouseOut = () => {
    setHoveredFilmId(null);
  };
  return (
    <>
      {films.map((filmItem) => (
        <FilmCard
          key={filmItem.id}
          film={filmItem}
          isHovered={hoveredFilmId === filmItem.id}
          mouseOverHandler={handleMouseOver}
          mouseOutHandler={handleMouseOut}
        />
      ))}
    </>
  );
}

export default FilmCards;
