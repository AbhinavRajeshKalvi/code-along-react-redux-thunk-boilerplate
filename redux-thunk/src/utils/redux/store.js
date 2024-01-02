import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import { reducer } from "./reducer"
import { thunk } from 'redux-thunk'
import logger from "redux-logger"

import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const fetchStore = createStore(reducer, composeEnhancers (applyMiddleware(logger, thunk)))