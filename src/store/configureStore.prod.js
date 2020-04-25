import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { persistConfig } from "./persist";

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);
  return { store, persistor };
}
