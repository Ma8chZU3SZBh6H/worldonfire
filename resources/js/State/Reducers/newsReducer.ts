import { TypeNewsState, TypeReduxAction } from "../../types/Types";
import { newsConstants } from "../Constants/newsConstants";

const defaultState: TypeNewsState = {
    news: [],
    favs: [],
    selected: 0,
};

function newsReducer(state = defaultState, action: TypeReduxAction) {
    switch (action.type) {
        case newsConstants.SELECT:
            return { ...state, selected: action.payload };
        case newsConstants.SET_NEWS:
            return { ...state, news: action.payload };
        case newsConstants.SET_FAVS:
            return { ...state, favs: action.payload };
        default:
            return state;
    }
}

export default newsReducer;
