export type RentCards = {
  title: string;
  src: string;
  price: number;
  current: string;
  type: string;
  lable: string;
  time: string;
  srcSmall: string;
  id: number;
  lat: number;
  lng: number;
  city: string;
};
export type City ={
  name: string;
}
export type reviewRooms = {
  id: number;
  name: string;
  src: string;
  text: string;
  date: string;
};
export type Point = {
  title: string;
  lat: number;
  lng: number;
};
export type reviewAnswer = {
  reviewsviews: reviewRooms[];
};
export type AnswerCards = {
  rooms:RentCards[];
};

export type AnswerCity = City[];
export type Points = Point[];
export type RentInfo = AnswerCards[];
export type ReviewInfo = reviewAnswer[];

