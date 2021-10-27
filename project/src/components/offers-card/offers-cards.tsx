import Cards from '../cards/cards';
import {RentInfo} from '../../types/card';
import {AnswerCards} from '../../types/card';

type CardsOffers = {

  answersCards: RentInfo;

}

function OffersCards({answersCards}: CardsOffers): JSX.Element {
  const [oneCard] = answersCards;
  return(
    <Cards answers={oneCard as AnswerCards}/>
  );
}
export default OffersCards;
