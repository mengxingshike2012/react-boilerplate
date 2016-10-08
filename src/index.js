import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

import { TestContainer, NextPageContainer, FlexContainer } from 'containers/index';
import V2exHotTopics from 'containers/v2exContainer';
import configure from './stores/configureStore';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

history.listen((location)=>console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={V2exHotTopics} />
      <Route path="/next" component={NextPageContainer} />
      <Route path="/flex" component={FlexContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
