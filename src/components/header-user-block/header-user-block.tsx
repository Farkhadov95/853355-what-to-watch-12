import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/actions/api-actions';
import { authorizationStatusSelector } from '../../store/selectors';

function HeaderUserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(authorizationStatusSelector);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === 'AUTH'
          ? <Link className="user-block__link" onClick={(evt) => {evt.preventDefault(); dispatch(logoutAction());}} to='/'>Sign out</Link>
          : <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>}
      </li>
    </ul>
  );
}

export default HeaderUserBlock;
