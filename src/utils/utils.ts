export const getFilmSatisfaction = (filmRating: number) => {
  let filmSatisfaction: string;

  if (filmRating < 3) {
    filmSatisfaction = 'Bad';
  } else if (filmRating < 5) {
    filmSatisfaction = 'Normal';
  } else if (filmRating < 8) {
    filmSatisfaction = 'Good';
  } else if (filmRating < 10) {
    filmSatisfaction = 'Very good';
  } else if (filmRating === 10) {
    filmSatisfaction = 'Awesome';
  } else {
    filmSatisfaction = 'N/A';
  }

  return filmSatisfaction;
};
