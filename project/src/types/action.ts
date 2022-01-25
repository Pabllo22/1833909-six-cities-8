import {changeCity, changeList} from '../store/action';
export enum ActionType {
  ChangeCity = 'city/changeCity',
  RenderRooms = 'city/renderRooms',
}

export type Actions = | ReturnType<typeof changeList> | ReturnType<typeof changeCity>;
