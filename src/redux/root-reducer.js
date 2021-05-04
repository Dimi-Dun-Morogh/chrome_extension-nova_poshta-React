import { combineReducers } from 'redux';
import notificationsReducer from './notifications_store/notifications.reducer';

import packagesReducer from './packages/packages.reducer';


const rootReducer = combineReducers({
  packages: packagesReducer,
  notifications: notificationsReducer,
});

export default rootReducer;