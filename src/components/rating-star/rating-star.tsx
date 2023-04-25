import React from 'react';

type RatingStarProps = {
    orderNumber: number;
    currentStateID: string;
    isReviewSending: boolean;
    changeHandler: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function RatingStar({orderNumber, changeHandler, currentStateID, isReviewSending}: RatingStarProps):JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${orderNumber}`}
        type="radio"
        name="rating"
        value={orderNumber}
        onChange={changeHandler}
        checked={currentStateID === `${orderNumber}`}
        disabled={isReviewSending}
      />
      <label className="rating__label" htmlFor={`star-${orderNumber}`}>{`Rating ${orderNumber}`}</label>
    </>
  );
}

export default RatingStar;
