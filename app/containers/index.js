import React, { Component }  from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import Application from './app';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
