import { handleActions } from 'redux-actions';

export default handleActions({
  'hello' (state, action) {
    return 0;
  },
  'async increment' (state, action) {
    return state;
  },
  'do increment'(state, action) {
    return state+1;
  }
}, {});
