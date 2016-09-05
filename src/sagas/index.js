import testSaga from './testSagas';

export default function* rootSaga() {
  yield [
    testSaga()
  ]
}
