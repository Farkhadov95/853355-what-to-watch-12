import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
  isHovered: boolean;
  mouseOverHandler: (id: number) => void;
  mouseOutHandler: () => void;

}

function FilmCard({film, isHovered = false, mouseOverHandler, mouseOutHandler}: FilmCardProps): JSX.Element {
  const {name, imgSrc, videoSrc} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={() => mouseOverHandler(film.id)} onMouseOut={()=> mouseOutHandler}>
        {
          isHovered ?
            <video src={videoSrc} width="280" height="175" autoPlay />
            : <img src={imgSrc} alt="name" width="280" height="175" />
        }
      </div>
      <Link to='film' title='film' style={{textDecoration: 'none', color: 'inherit'}}>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{name}</a>
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
