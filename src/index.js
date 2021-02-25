import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import { getTodosWatcher } from "./sagas/sagas";
import { Provider } from "react-redux";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.navigator.userAgent.includes('Chrome')
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

sagaMiddleware.run(getTodosWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
