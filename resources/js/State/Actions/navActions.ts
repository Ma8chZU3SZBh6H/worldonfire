import { navConstants } from "../Constants/navConstants";

export function navActionToggle() {
    return {
        type: navConstants.TOGGLE,
    };
}

export function navActionSelect() {
    return {
        type: navConstants.SELECT,
    };
}
