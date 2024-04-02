import {
  ActivityDispatchTypes,
  GET_ACTIVITIES,
} from '../Actions/Activity/ActivityActionTypes';

interface DefaultStateI {
  activities?: string[];
}

export const defaultState: DefaultStateI = {
  activities: [
    'once a week',
    '2 times a week',
    '3 times a week',
    '4 times a week',
    '5 times a week',
    '6 times a week',
  ],
};

const ActivityReducer = (
  state: DefaultStateI = defaultState,
  action: ActivityDispatchTypes,
): DefaultStateI => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default ActivityReducer;
