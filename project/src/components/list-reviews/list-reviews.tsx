import {reviewAnswer} from '../../types/card';
type ListReviewScreen = {
  answers: reviewAnswer;
}
function ListReview(props: ListReviewScreen): JSX.Element {
  const {answers} = props;
  const {reviewsviews} = answers;
  return(
    <>
      {reviewsviews.map((reviewsview, id) => {
        const keyValue = `${id}-${reviewsview.src}`;
        return (
          <li key={keyValue} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={reviewsview.src} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {reviewsview.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {reviewsview.text}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{reviewsview.date}</time>
            </div>
          </li>
        );
      })}
    </>
  );
}
export default ListReview;
