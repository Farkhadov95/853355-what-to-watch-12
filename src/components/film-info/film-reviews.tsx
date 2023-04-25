import { Review } from '../../types/films';
import FilmReviewItem from '../film-reviews-item/film-review-item';

type FilmReviewsProps = {
  reviews: Review[];
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const middleElememt = Math.ceil(reviews.length / 2);
  const firstColumn = reviews.slice(0, middleElememt);
  const secondColumn = reviews.slice(middleElememt);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumn.map((review) => (
          <FilmReviewItem key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumn.map((review) => (
          <FilmReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
