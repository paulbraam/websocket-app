import { Reducer } from 'redux';
import { INCREMENT_USER_TOTAL_LOGS_COUNT } from '../actionTypes';
import { LOCALSTORAGE_LOGS_PROP } from '../../constants';
import { Action, UserState } from '../../types';

const initialUserState: UserState = {
  totalLogsCount: Number(localStorage.getItem(LOCALSTORAGE_LOGS_PROP)) || 0
};

export const userReducer: Reducer<UserState, Action> = (state = initialUserState, action) => {
  switch (action.type) {
    case INCREMENT_USER_TOTAL_LOGS_COUNT:
      const totalLogsCount = state.totalLogsCount + 1;
      localStorage.setItem(LOCALSTORAGE_LOGS_PROP, String(totalLogsCount));
      return { totalLogsCount };
    default:
      return state;
  }
};
