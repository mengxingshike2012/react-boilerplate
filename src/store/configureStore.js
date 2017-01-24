import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from 'reducers/index';
import rootSaga from 'sagas';

export default function configure(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(
    routerMiddleware(hashHistory),
    sagaMiddleware,
    createLogger(),
  );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
