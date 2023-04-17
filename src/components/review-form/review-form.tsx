import React, { useState } from 'react';
import { store } from '../../store';
import { postReviewAction } from '../../store/actions/api-actions';
import { PostReview } from '../../types/films';
import RatingStar from '../rating-star/rating-star';

type ReviewFormProps = {
  id: number;
}

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const starsCount = Array.from({length: 10}, (_, i) => (10 - i));
  const [reviewInfo, setReviewInfo] = useState({
    comment: '',
    rating: '',
  });

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    evt.persist();
    const { name, value } = evt.target;
    setReviewInfo({...reviewInfo, [name]: value});
    // eslint-disable-next-line no-console
    console.log(name);
  };

  const review: PostReview = {
    comment: reviewInfo.comment,
    rating: Number(reviewInfo['rating']),
  };

  const onSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(review);
    store.dispatch(postReviewAction({id, review}));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
      <div className="rating">
        <div className="rating__stars">
          {
            starsCount.map((i) => (
              <RatingStar key={i}
                orderNumber={i}
                changeHandler={onChangeHandler}
                currentStateID={reviewInfo['rating']}
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
          defaultValue={reviewInfo.comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
