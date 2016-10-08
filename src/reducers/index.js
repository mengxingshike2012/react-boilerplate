import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import count from './testReducer';
import v2ex from './v2ex';

export default combineReducers({
  count,
  v2ex,
  routing: routerReducer
})
