import {
  handleActions,
} from 'redux-actions';

const initialState = {
  topics: [],
  isLoading: false,
  detail: null,
};

export default handleActions({
  'fetchHotTopics/start': function (state, action) {
    return { ...state, isLoading: true };
  },
  'fetchHotTopics/end': function (state, action) {
    return { ...state, topics: action.payload, isLoading: false };
  },
  'fetchTopicDetail/start': function (state, action) {
    return { ...state, isLoading: true };
  },
  'fetchTopicDetail/end': function (state, action) {
    return { ...state, detail: action.payload };
  },

}, initialState);
