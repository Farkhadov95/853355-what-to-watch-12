import { Link, useParams } from 'react-router-dom';
import HeaderUserBlock from '../../components/header-user-block/header-user-block';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks';
import { filmSelector } from '../../store/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from '../../const';

function AddReviewScreen(): JSX.Element {
  const {id} = useParams();
  const film = useAppSelector(filmSelector);

  if (!film) {
    return <NotFoundScreen />;
  }

  const {name, posterImage } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Films}/${Number(id)}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <HeaderUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm id={Number(id)}/>
      </div>

    </section>
  );
}

export default AddReviewScreen;
