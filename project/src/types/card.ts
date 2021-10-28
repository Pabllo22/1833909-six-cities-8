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
};
export type AnswerCards = {
  offers: RentCards[];
};
export type RentInfo = AnswerCards[];
