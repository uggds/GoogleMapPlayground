import React, { Component }  from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import rootSaga from '../sagas'

import * as reducers from '../reducers';
import Application from '../app';

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
