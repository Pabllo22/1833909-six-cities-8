
import Logo from '../main-screen/logo';
import CardsFavorites from '../cards/cards-favorites';
import {RentInfo} from '../../types/card';
import {AnswerCards} from '../../types/card';
type CardsOffers = {
  answersCards: RentInfo;
}
function FavoritesScreen({answersCards}:CardsOffers): JSX.Element {
  const [oneCard] = answersCards;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardsFavorites answers={oneCard as AnswerCards}/>
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardsFavorites answers={oneCard as AnswerCards}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
export default FavoritesScreen;
