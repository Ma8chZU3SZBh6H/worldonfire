import { navConstants } from "../Constants/navConstants";

export function navActionToggle() {
    return {
        type: navConstants.TOGGLE,
    };
}
