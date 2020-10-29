import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Route, Switch } from 'react-router';
import { LoginComponent, OtherComponent, PrivateRoute, UserComponent } from 'components';

type Props = {
    history: History;
};

const App: React.FC<Props> = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LoginComponent} />
            <PrivateRoute path="/user" component={UserComponent} />
            <PrivateRoute path="/other" component={OtherComponent} />
        </Switch>
    </ConnectedRouter>
);

export default App;
