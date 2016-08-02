import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers.js';
import { closeAlert, toggleForm } from './redux/actions.js';
import App from './views/app.js';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

class Orkon extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('orkonapp', () => Orkon);
