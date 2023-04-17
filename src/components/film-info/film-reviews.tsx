import { Review } from '../../types/films';
import FilmReviewItem from '../film-reviews-item/film-review-item';

type FilmReviewsProps = {
  reviews: Review[];
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
// TODO: create second column for reviews

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <FilmReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
