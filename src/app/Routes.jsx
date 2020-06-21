/**
 * Libraries
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

/**
 * Dependencies
 */
import routes from './config/routes';

/**
 * Components
 */
import Home from '../Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.signin} render={() => <div>signin</div>} />
        <Route exact path={routes.trials} render={() => <div>trials</div>} />
        <Route
          exact
          path={routes.howItWorks}
          render={() => <div>howItWorks</div>}
        />
        <Route exact path={routes.search} render={() => <div>search</div>} />
        <Route
          exact
          path={routes.terms}
          render={() => <div>Terms and Conditions</div>}
        />
        <Route
          exact
          path={routes.privacy}
          render={() => <div>Privacy Policy</div>}
        />
        <Route
          exact
          path={routes.contact}
          render={() => <div>Contact Us</div>}
        />
        <Route
          exact
          path={routes.root}
          render={(props) => (
            <Redirect
              to={{
                pathname: routes.home,
                state: {from: props.location},
              }}
            />
          )}
        />
        <Route component={() => <div>404</div>} />
      </Switch>
    </Router>
  );
};

export default Routes;
