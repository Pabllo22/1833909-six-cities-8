//import {offers} from '../mocks/offers';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import {DEFAULT_SET_CITY} from '../components/app/const';

const initialState = {
  name: DEFAULT_SET_CITY,
  setRooms: [],
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, name: action.payload };
    case ActionType.RenderRooms:
      return { ...state, setRooms: action.payload };
    default:
      return state;
  }
};
