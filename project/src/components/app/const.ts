export enum AppRoute{
  Login = '/login',
  Lose = '/lose',
  Result = '/result',
  Root = '/',
  FavoritScreen = '/favorites',
  Room = '/offer/:id',

}
export enum AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_SET_CITY = 'Amsterdam';
