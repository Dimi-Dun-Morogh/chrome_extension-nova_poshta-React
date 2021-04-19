import { combineReducers } from 'redux';

import packagesReducer from './packages/packages.reducer';


const rootReducer = combineReducers({
  packages: packagesReducer
});

export default rootReducer;