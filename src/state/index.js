import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import quizReducer from "./quiz/reducer";

const rootReducer = combineReducers({ quizReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
