import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { doIncrement } from 'actions/test';

export function* incrementAsync() {
  yield delay(1000)
  yield put(doIncrement());
}

export default function* watchIncrementAsync() {
  yield* takeEvery('async increment', incrementAsync);
}
