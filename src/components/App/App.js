import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import Issues from '../Issues/Issues';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Issues prop={'Welcome'} />
      </Provider>
    );
  }
}
export default App;
