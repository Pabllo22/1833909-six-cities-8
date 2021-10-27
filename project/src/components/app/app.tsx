import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute, AuthorizationStatus} from './const';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import ErrorsScreen from '../errors-screen/errors-screen';
import {RentInfo} from '../../types/card';

type AppScreenProps = {

  errorsCount: number;
  answersCards: RentInfo;

}

function App({errorsCount, answersCards}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen answersCards={answersCards} errorsCount={errorsCount} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen />
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
