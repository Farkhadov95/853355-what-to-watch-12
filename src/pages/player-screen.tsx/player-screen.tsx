import { useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/actions/action';
import { filmSelector } from '../../store/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const { filmsData } = useAppSelector(filmSelector);
  const film = filmsData.find((item) => item.id === Number(id));

  if (film === undefined) {
    return <NotFoundScreen />;
  }

  const onExitButtonClick = () => {
    dispatch(redirectToRoute(AppRoute.Root));
  };

  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster="img/player-poster.jpg" autoPlay></video>

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
