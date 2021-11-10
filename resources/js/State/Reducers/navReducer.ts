import { TypeReduxAction } from "../../types/Types";
import { navConstants } from "../Constants/navConstants";

const defaultState = {
    expanded: true,
};

function navReducer(state = defaultState, action: TypeReduxAction) {
    switch (action.type) {
        case navConstants.TOGGLE:
            return { ...state, expanded: !state.expanded };

        default:
            return state;
    }
}

export default navReducer;
