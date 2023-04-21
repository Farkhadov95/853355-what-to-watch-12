import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { processErrorHandle } from '../../services/process-error-handler';
import { store } from '../../store';
import { setFavoriteStatusAction } from '../../store/actions/api-actions';
import { getAuthorizationStatus, getFilms } from '../../store/selectors';

type MyListButtonProps = {
    id: number;
}


function MyListButton({id}: MyListButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmsData = useAppSelector(getFilms);
  const navigate = useNavigate();

  const film = filmsData.find((item) => item.id === Number(id));
  const getFavoritesNumber = () => {
    const favorites = filmsData.filter((item) => item.isFavorite);
    return favorites.length;
  };

  const onStatusClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(setFavoriteStatusAction({id: Number(id), status: film?.isFavorite ? 0 : 1}));
    } else {
      navigate(AppRoute.Login);
      processErrorHandle('Please, log in to add this film to your list');
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onStatusClick}>
      {
        film?.isFavorite ?
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
      <span className="film-card__count">{getFavoritesNumber()}</span>
    </button>
  );
}

export default MyListButton;
