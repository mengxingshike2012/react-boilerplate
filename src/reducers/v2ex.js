import {
  handleActions,
} from 'redux-actions';

const initialState = {
  topics: [],
  isLoading: false,
};

export default handleActions({
  'fetchHotTopics/start': function (state, action) {
    return { ...state, isLoading: false };
  },
  'fetchHotTopics/end': function (state, action) {
    return { ...state, topics: action.payload, isLoading: false };
  },
}, initialState);
