import { Review } from '../../types/films';
import { format } from 'date-fns';

type FilmReviewProps = {
  review: Review;
}

function FilmReview({review}: FilmReviewProps): JSX.Element {
  const date = format(new Date(review.date), 'MMMM dd, yyyy');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default FilmReview;
