import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import masterDataReducer from './reducersMasterData';
import selectedTabReducer from './reducersSelectedTab';
import eventListReducer from './reducersEventList';
import settingsReducer from './reducersSettings';
import userSettingsFormReducer from './reducersUserSettingsForm';
import swipeCalendarReducer from './reducersSwipeCalendar';


const rootReducer = combineReducers({
  masterData : masterDataReducer,
  selectedTab : selectedTabReducer,
  form : formReducer,
  eventList : eventListReducer,
  settingsData : settingsReducer,
  userSettingsForm : userSettingsFormReducer,
  calendarData : swipeCalendarReducer
});

export default rootReducer;
