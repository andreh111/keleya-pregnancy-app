export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export interface GetActivities {
  type: typeof GET_ACTIVITIES;
  payload: string[];
}

export type ActivityDispatchTypes = GetActivities;
