import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import configure from 'store/configureStore';

import routes from './Routes';

const store = configure();


// history.listen(location => console.log(location));

export default () => (
  <Provider store={store}>
    {routes}
  </Provider>
)
