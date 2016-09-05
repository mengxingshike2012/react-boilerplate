import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import count from './testReducer';

export default combineReducers({
  count,
  routing: routerReducer
})
