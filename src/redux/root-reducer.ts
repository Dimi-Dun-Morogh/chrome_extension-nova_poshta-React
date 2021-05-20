import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import notificationsReducer from './notifications_store/notifications.reducer';

import packagesReducer from './packages/packages.reducer';
import historyReducer from './history/history.reducer';

const persistConfig = {
  key: 'rootNp',
  storage,
  whitelist: ['history'],
};

const rootReducer = combineReducers({
  packages: packagesReducer,
  notifications: notificationsReducer,
  history: historyReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;
