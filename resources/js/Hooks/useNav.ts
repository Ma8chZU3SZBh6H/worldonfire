import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as navActions from "../State/Actions/navActions";
import { TypeStore } from "../State/Reducers/reducers";

function useNav() {
    const nav = useSelector((store: TypeStore) => store.nav);
    const dispatch = useDispatch();
    const actions = bindActionCreators(navActions, dispatch);
    return { nav, ...actions };
}

export default useNav;
