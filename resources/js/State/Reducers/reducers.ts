import { combineReducers } from "redux";
import navReducer from "./navReducer";

export const reducers = combineReducers({
    nav: navReducer,
});

export type TypeStore = ReturnType<typeof reducers>;
