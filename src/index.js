import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

import { TestContainer, NextPageContainer, FlexContainer } from 'containers/index';
import configure from './stores/configureStore';

const initalState = {count: 0};
const store = configure(initalState);
const history = syncHistoryWithStore(browserHistory, store);

history.listen((location)=>console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TestContainer} />
      <Route path="/next" component={NextPageContainer} />
      <Route path="/flex" component={FlexContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
