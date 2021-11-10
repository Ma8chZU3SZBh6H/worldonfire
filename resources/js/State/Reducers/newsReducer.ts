import { TypeReduxAction } from "../../types";
import { newsConstants } from "../Constants/newsConstants";

const defaultState = {
    news: [],
    selected: 0,
};

function newsReducer(state = defaultState, action: TypeReduxAction) {
    switch (action.type) {
        case newsConstants.SELECT:
            return { ...state, selected: action.payload };
        case newsConstants.SET_NEWS:
            return { ...state, news: action.payload };
        default:
            return state;
    }
}

export default newsReducer;
