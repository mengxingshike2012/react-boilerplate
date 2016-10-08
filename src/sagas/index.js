import testSaga from './testSagas';
import v2exSaga from './v2ex'

export default function* rootSaga() {
  yield [
    testSaga(),
    v2exSaga(),
  ]
}
