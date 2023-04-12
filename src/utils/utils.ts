export const getFilmSatisfaction = (filmRating: number) => {
  let filmSatisfaction: string;

  if (filmRating <= 3.5) {
    filmSatisfaction = 'Unwatchable';
  } else if (filmRating <= 5) {
    filmSatisfaction = 'Bad';
  } else if (filmRating <= 6.5) {
    filmSatisfaction = 'Normal';
  } else if (filmRating <= 8) {
    filmSatisfaction = 'Good';
  } else if (filmRating <= 10) {
    filmSatisfaction = 'Masterpiece';
  } else {
    filmSatisfaction = 'N/A';
  }

  return filmSatisfaction;
};
