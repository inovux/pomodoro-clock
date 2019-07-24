import { combineReducers } from 'redux';

import timeSettings, { TimeSettings } from './timeSettings';

export interface ApplicationState {
  timeSettings: TimeSettings;
}

export default combineReducers({
  timeSettings,
});
