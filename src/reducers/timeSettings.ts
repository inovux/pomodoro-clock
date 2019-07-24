import { Actions } from '../actions';

export type TimeSettings = {
  timeLength: number;
};

const initialState = {
  timeLength: 0,
};

const timeSettings = (state: TimeSettings = initialState, action: any) => {
  switch (action.type) {
    case Actions.INCREASE_MINUTE_LENGTH:
      return {
        ...state,
        timeLength: state.timeLength + 1,
      };

    case Actions.DECREASE_MINUTE_LENGTH:
      return {
        ...state,
        timeLength: state.timeLength - 1,
      };

    default:
      return state;
  }
};

export default timeSettings;
