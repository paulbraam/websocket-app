import { Reducer } from 'redux';
import { ADD_LOG, CLEAR_LOGS } from '../actionTypes';
import { Action, LogsState } from '../../types';

const initialLogsState: LogsState = [];

export const logsReducer: Reducer<LogsState, Action> = (state = initialLogsState, action) => {
  switch (action.type) {
    case ADD_LOG:
      const log = action.payload;
      if (log) return [...state, log];
      return state;
    case CLEAR_LOGS:
      return [];
    default:
      return state;
  }
};
