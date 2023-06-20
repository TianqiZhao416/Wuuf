import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const reducer = {};

const preloadedState = {
  user: "",
  matches: [],
  profiles: [],
};

const store = configureStore({ reducer });
