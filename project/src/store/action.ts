import {ActionType} from '../types/action';
import {RentCards} from '../types/card';

export const changeList = (setRooms: RentCards[]) => ({
  type: ActionType.RenderRooms,
  payload: setRooms,
} as const);

export const changeCity = (name: string) => ({
  type: ActionType.ChangeCity,
  payload: name,
} as const);
