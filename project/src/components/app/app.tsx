import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import { AppRoute, AuthorizationStatus } from './const';
//import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import PropertyScreen from '../property-screen/property-screen';
//import PropertyNotLogged from '../property-not-logged-screen/property-not-logged';
import PrivateRoute from '../privet-route/privet-route';
import ErrorsScreen from '../errorsScreen/errorsScreen';

type AppScreenProps = {

  errorsCount: number;

}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.FavoritScreen} render={() => <FavoritesScreen />}         authorizationStatus={AuthorizationStatus.NoAuth} />
        <Route>
          <ErrorsScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
