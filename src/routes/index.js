import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router';
import Routes from './routes';
import AuthRoutes from './auth';

const Routes1 = () => {

    const match = useRouteMatch()

    return (
        <Switch>
            <Route exact={false} path={`${match.url}`} component={Routes} />
             <Route exact={false} path={`${match.url}`} component={AuthRoutes} />
        </Switch>
    );
}

export default Routes1;
