import { call, put, take, all } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import { addLog, incrementUserTotalLogsCount } from '../actionCreators';
import { WebSocketClient } from '../../utils';
import { Emitter } from '../../types';

const initWebsocketChannel = () => {
  return eventChannel(emitter => {
    const websocket = new WebSocketClient({
      url: process.env.REACT_APP_WEBSOCKET_URL,
      emitter
    });
    return () => {
      websocket.disconnect();
    };
  });
};

export function* webSocketSaga() {
  const webSocketChannel: EventChannel<Emitter> = yield call(initWebsocketChannel);
  while (true) {
    const log: string = yield take(webSocketChannel);
    yield all([put(addLog(log)), put(incrementUserTotalLogsCount())]);
  }
}
