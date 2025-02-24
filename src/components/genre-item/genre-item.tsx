import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setGenre } from '../../store/films-data/films-data';

type GenreItemProp = {
  genre: string;
  isActive: boolean;
}

function GenreItem({ genre, isActive }: GenreItemProp): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(setGenre(genre));
  };

  return (
    <li className={classNames('catalog__genres-item',
      { 'catalog__genres-item--active': isActive })}
    >
      <a
        className="catalog__genres-link"
        onClick={handleChange}
      >
        {genre}
      </a>
    </li>
  );
}

export default GenreItem;
