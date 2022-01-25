import {useRef} from 'react';
import {useEffect} from 'react';
import {Icon} from 'leaflet';
import {Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Points} from '../../types/card';
import {Point} from '../../types/card';
import {AnswerCards} from '../../types/card';
import {URL_MARKER_DEFAULT} from '../app/const';
import {URL_MARKER_CURRENT} from '../app/const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  rooms: AnswerCards;
  points: Points;
  selectedPoint: Point | undefined;
};
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {points, selectedPoint, rooms} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, rooms);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map property__map map" ref={mapRef}></section>;
}

export default Map;
