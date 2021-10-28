import {RentInfo} from '../types/card';
import {Point} from '../types/card';

export const offers: RentInfo = [
  {
    offers: [{
      title: 'Nice, cozy, warm big bed apartment',
      src: 'img/apartment-03.jpg',
      price: 180,
      current: '€',
      type: 'Apartment',
      lable: 'Premium',
      time: 'night',
      srcSmall: 'img/apartment-03-small.jpg',
      id: 1,
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },{
      title: 'Beautiful & luxurious apartment at great location',
      src: 'img/apartment-01.jpg',
      price: 120,
      current: '€',
      type: 'Apartment',
      lable: 'Premium',
      time: 'night',
      srcSmall: 'img/apartment-01-small.jpg',
      id: 2,
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },{
      title: 'Wood and stone place',
      src: 'img/room.jpg',
      price: 80,
      current: '€',
      type: 'Private room',
      lable: ' ',
      time: 'night',
      srcSmall: 'img/room-small.jpg',
      id: 3,
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },{
      title: 'Canal View Prinsengracht',
      src: 'img/apartment-02.jpg',
      price: 132,
      current: '€',
      type: 'Apartment',
      lable: ' ',
      time: 'night',
      srcSmall: 'img/apartment-02-small.jpg',
      id: 4,
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    }],
  },
];
export const Points: Point[]= [
  {
    title: 'Wood and stone place',
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },{
    title: 'Canal View Prinsengracht',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },{
    title: 'Beautiful & luxurious apartment at great location',
    lat: 52.369553943508,
    lng: 4.85309666406198,
  },{
    title: 'Nice, cozy, warm big bed apartment',
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
];
