import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from './reducers';

import "./scss/main.scss";
import App from "./App";

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("app")
  );