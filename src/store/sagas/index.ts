import { all, fork } from 'redux-saga/effects';
import { webSocketSaga } from './webSocket.saga';

export default function* () {
  // grouping all sagas
  yield all([fork(webSocketSaga)]);
}
