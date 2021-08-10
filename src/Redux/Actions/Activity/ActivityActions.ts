import {Dispatch} from 'react';
import {defaultState} from '../../Reducers/ActivityReducer';
import {ActivityDispatchTypes, GET_ACTIVITIES} from './ActivityActionTypes';

export const getActivities =
  () => (dispatch: Dispatch<ActivityDispatchTypes>) => {
    dispatch({
      type: GET_ACTIVITIES,
      payload: defaultState.activities!,
    });
  };
