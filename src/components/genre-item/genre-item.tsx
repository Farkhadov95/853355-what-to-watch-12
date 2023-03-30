import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setGenre } from '../../store/actions/action';

type GenreItemProp = {
  genre: string;
  isActive: boolean;
}

function GenreItem({genre, isActive}: GenreItemProp): JSX.Element {
  const dispatch = useAppDispatch();
  const classes = classNames('catalog__genres-item', {
    'catalog__genres-item--active':isActive
  });

  const onGenreChange = (chosenGenre: string) => {
    dispatch(setGenre(chosenGenre));
  };

  return (
    <li className={classes}>
      <a href="#" className="catalog__genres-link" onClick={() => onGenreChange(genre)}>{genre}</a>
    </li>
  );
}

export default GenreItem;
