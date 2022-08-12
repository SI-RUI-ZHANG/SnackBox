import {compose, createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {logger} from 'redux-logger'
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./root-saga";

import {rootReducer} from "./root-reducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
  // blacklist: ['user']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean)
  // filter out anything that is falsy

const composeEnhancers = (
  process.env.NODE_EVN !== 'production'
  && window
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

