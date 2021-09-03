import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Products from '../views/products';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Products} />
    </Switch>
  );
};

export default Routes;
