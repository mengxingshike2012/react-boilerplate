import {
  takeEvery,
} from 'redux-saga';
import {
  put,
  call,
} from 'redux-saga/effects';
import * as V2exApi from 'apis/v2ex';

export function* fetchHotTopics() {
  yield put({
    type: 'fetchHotTopics/start',
  });
  const data = yield call(V2exApi.fetchHotTopics);
  yield put({
    type: 'fetchHotTopics/end',
    payload: data,
  });
}

export default function* watchFetchHotTopics() {
  yield* takeEvery('fetch hot topics', fetchHotTopics);
}
