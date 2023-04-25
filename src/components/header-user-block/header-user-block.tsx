import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/user-process/user-process';
import { authorizationStatusSelector } from '../../store/selectors';

function HeaderUserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(authorizationStatusSelector);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {authorizationStatus === AuthorizationStatus.Auth
            ? <Link to={AppRoute.MyList}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
            : <span></span>}
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth
          ? <Link className="user-block__link" onClick={(evt) => {evt.preventDefault(); dispatch(logoutAction());}} to='/'>Sign out</Link>
          : <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>}
      </li>
    </ul>
  );
}

export default HeaderUserBlock;
