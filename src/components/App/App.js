import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store, history } from '../../state/store';
import { IssuesConnected } from '../Issues/Issues';
import NotFound from '../NotFound/NotFound';
import { IssueDetailConnected } from '../IssueDetail/IssueDetail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={IssuesConnected} />
            <Route
              exact
              path="/details/:issueId(\d+)"
              component={IssueDetailConnected}
            />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
