import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import V2exHotTopics from 'containers/index';
import configure from 'store/configureStore';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={V2exHotTopics} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
