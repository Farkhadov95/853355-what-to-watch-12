import React from 'react';


function ReviewForm(): JSX.Element {
  const [reviewInfo, setReviewInfo] = React.useState({
    starID: '',
    text: '',
  });

  const onChangeHandler = (evt: { persist: () => void; target: { name: string; id: string; value: string } }) => {
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
          <input className="rating__input" id="star-" type="radio" name="rating" value="10" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-10'}/>
          <label className="rating__label" htmlFor="star-">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-9'}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-8'}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-7'}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-6'}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-5'}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-4'}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-3'}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={onChangeHandler}checked={reviewInfo.starID === 'star-2'} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={onChangeHandler} checked={reviewInfo.starID === 'star-1'}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
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
