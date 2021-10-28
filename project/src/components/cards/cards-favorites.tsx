import {AnswerCards} from '../../types/card';
type AnswerCardsScreen = {
  answers: AnswerCards;
}

function CardsFavorites(props: AnswerCardsScreen): JSX.Element {
  const {answers} = props;
  const {offers} = answers;
  return (
    <>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.src}`;
        return (
          <article key={keyValue} className="cities__place-card place-card">
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={offer.srcSmall} width="260" height="200" alt="Place image" />
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">{offer.current} {offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;{offer.time}</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarksмсм</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{offer.title}</a>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default CardsFavorites;
