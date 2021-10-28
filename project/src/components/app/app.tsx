import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute, AuthorizationStatus} from './const';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import ErrorsScreen from '../errors-screen/errors-screen';
import {RentInfo} from '../../types/card';
import {Points} from '../../types/card';
import {ReviewInfo} from '../../types/card';
type AppScreenProps = {
  answersRevies: ReviewInfo;
  errorsCount: number;
  answersCards: RentInfo;
  points: Points;
  rooms: RentInfo;
}

function App({errorsCount, answersCards, points, rooms, answersRevies}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen answersCards={answersCards} points={points} rooms={rooms} errorsCount={errorsCount} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen answersRevies={answersRevies}/>
        </Route>
        <PrivateRoute exact path={AppRoute.FavoritScreen} render={() => <FavoritesScreen  answersCards={answersCards}/>}         authorizationStatus={AuthorizationStatus.Auth} />
        <Route>
          <ErrorsScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
