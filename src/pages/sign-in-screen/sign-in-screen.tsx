import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/error-message/error-message';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { processErrorHandle } from '../../services/process-error-handler';
import { loginAction } from '../../store/user-process/user-process';
import { AuthData } from '../../types/auth-data';

function SignInScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current?.value && passwordRef.current?.value) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Root);
    } else {
      processErrorHandle('Please, enter your email and password');
    }
  };

  return (
    <div className="user-page">
      <ErrorMessage />
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email" id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInScreen;
