import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { persistConfig } from "./persist";

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function configureStore(preloadedState) {
  const middlewares = [logger, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(composedEnhancers)
  );

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);
  return { store, persistor };
}
