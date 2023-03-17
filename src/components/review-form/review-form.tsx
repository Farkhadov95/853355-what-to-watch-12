import React from 'react';
import RatingStar from '../rating-star/rating-star';


function ReviewForm(): JSX.Element {
  const starsCount = Array.from({length: 10}, (_, i) => (10 - i));
  const [reviewInfo, setReviewInfo] = React.useState({
    starID: '',
    text: '',
  });

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    evt.persist();
    const { name, id, value } = evt.target;

    if (name === 'rating') {
      setReviewInfo({...reviewInfo, starID: String(id)});
    } else {
      setReviewInfo({...reviewInfo, text: String(value)});
    }
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            starsCount.map((i) => (
              <RatingStar key={i}
                orderNumber={i}
                changeHandler={onChangeHandler}
                currentStateID={reviewInfo.starID}
              />
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          onChange={onChangeHandler}
        >
          {reviewInfo.text}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
