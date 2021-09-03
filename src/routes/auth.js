import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Login from '../views/login';

const AuthRouters = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Login} />
    </Switch>
  );
};

export default AuthRouters;
