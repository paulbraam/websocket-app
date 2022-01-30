import { Log } from '../../types';
import { ADD_LOG, CLEAR_LOGS } from '../actionTypes';

export const addLog = (log: Log) => ({ type: ADD_LOG, payload: log });
export const clearLogs = () => ({ type: CLEAR_LOGS });
