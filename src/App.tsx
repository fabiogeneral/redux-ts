import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Route, Switch } from 'react-router';
import { UserComponent } from 'components';

type Props = {
    history: History;
};

const App: React.FC<Props> = ({ history }) => (
    <ConnectedRouter history={history}>
        <div>Menu</div>
        <br />
        <Switch>
            <Route exact path="/" component={UserComponent} />
            <Route path="/test" render={() => <div>Test</div>} />
        </Switch>
    </ConnectedRouter>
);

export default App;
