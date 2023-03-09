import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

      <div className="page-not-found user-page__content">
        <h2 style = {{font: '30em', textAlign: 'center'}}> 404 Page Not Found </h2>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
