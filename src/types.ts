import store from './store';
import rootReducer from './store/reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export interface UserState {
  totalLogsCount: number;
}

export type Log = string;

export type LogsState = Log[];

export interface IState {
  user: UserState;
  logs: LogsState;
}

export interface Action {
  readonly type: string;
  readonly payload?: string;
}

export type Emitter = (input: unknown) => void;

export interface WebSocketClientProps {
  url: string;
  emitter: Emitter;
}
