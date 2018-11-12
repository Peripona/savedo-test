import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store, history } from '../../state/store';
import Issues from '../Issues/Issues';
import NotFound from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Issues} />
            <Route exact path="/issue/:issueId(\d+)" component={Issues} />
            <Route exact path="/details" component={Issues} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
