import { combineReducers } from "redux";
import navReducer from "./navReducer";
import newsReducer from "./newsReducer";

export const reducers = combineReducers({
    nav: navReducer,
    news: newsReducer,
});

export type TypeStore = ReturnType<typeof reducers>;
