import v2exSaga from './v2ex';

export default function* rootSaga() {
  yield [
    v2exSaga(),
  ];
}
