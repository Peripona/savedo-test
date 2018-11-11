import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { store } from '../../state/store';
import Issues from '../Issues/Issues';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Link to={'/g/ex'}>g/ex</Link>
          <Route exact path="/" render={() => <h1>Welcome</h1>} />
          <Route path="/g/:id" component={Issues} />
        </Router>
      </Provider>
    );
  }
}
export default App;
