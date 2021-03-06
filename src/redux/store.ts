import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persiststore = persistStore(store);

export default { store, persiststore };
