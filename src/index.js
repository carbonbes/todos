import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./reducers/todosReducer";
import { getTodosWatcher } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
  todosReducer,
);

const store = createStore(
  todosReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(getTodosWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
