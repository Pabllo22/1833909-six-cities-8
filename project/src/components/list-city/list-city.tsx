import { AnswerCity } from '../../types/card';
import {changeCity} from '../../store/action';
import { Dispatch } from 'redux';
import {State} from '../../types/state';
import { Actions } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';

type ListCityScreen = {
  city: AnswerCity;
}

const mapStateToProps = ({ name, setRooms }: State) => ({
  name,
  setRooms,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(name: string) {
    dispatch(changeCity(name));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ListCityScreen;


function ListCity(props: ConnectedComponentProps): JSX.Element {
  const {city, name, onCityChange} = props;
  return (
    <>
      {city.map((n, id) => {
        const keyValue = `${id}-${n.name}`;
        return (
          <li key={keyValue} className="locations__item">
            <a
              onClick={ () => {onCityChange(n.name); } }
              className={name === n.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>{n.name}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}
export {ListCity};
export default connector(ListCity);
