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
};

export type Point = {  
  title: string;
  lat: number;
  lng: number;
};

export type AnswerCards = {
  offers: RentCards[];
};

export type Points = Point[];
export type RentInfo = AnswerCards[];
