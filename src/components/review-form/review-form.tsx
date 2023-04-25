import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { postReviewAction } from '../../store/films-data/films-data';
import { PostReview } from '../../types/films';
import RatingStar from '../rating-star/rating-star';
import { processErrorHandle } from '../../services/process-error-handler';
import ErrorMessage from '../error-message/error-message';
import { useAppSelector } from '../../hooks';
import { isReviewSendingSelector } from '../../store/selectors';

type ReviewFormProps = {
  id: number;
}

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const navigate = useNavigate();
  const isReviewSending = useAppSelector(isReviewSendingSelector);
  const starsCount = Array.from({length: 10}, (_, i) => (10 - i));
  const [reviewInfo, setReviewInfo] = useState({
    comment: '',
    rating: '',
  });

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    evt.persist();
    const { name, value } = evt.target;
    setReviewInfo({...reviewInfo, [name]: value});
  };

  const review: PostReview = {
    comment: reviewInfo.comment,
    rating: Number(reviewInfo.rating),
  };

  const onSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (reviewInfo.comment.length < 50 || reviewInfo.comment.length > 400) {
      processErrorHandle('The comment must be between 50 and 400 characters long.');
      return;
    }
    store.dispatch(postReviewAction({id, review}));
    navigate(`${AppRoute.Film}/${id}`);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
      <ErrorMessage />
      <div className="rating">
        <div className="rating__stars">
          {
            starsCount.map((i) => (
              <RatingStar key={i}
                orderNumber={i}
                changeHandler={onChangeHandler}
                currentStateID={reviewInfo['rating']}
                isReviewSending={isReviewSending}
              />
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="comment"
          id="review-text"
          placeholder="Review text"
          onChange={onChangeHandler}
          value={reviewInfo.comment}
          disabled={isReviewSending}
        >
        </textarea>
        <div className="add-review__submit">
          <button disabled={!reviewInfo.comment || !reviewInfo.rating || isReviewSending} className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
