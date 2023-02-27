import { legacy_createStore, combineReducers } from "redux";
import { taskListReducer } from "./reducers/TaskList";

const rootReducer = combineReducers({
    taskListReducer,
});

export const store = legacy_createStore(rootReducer);
