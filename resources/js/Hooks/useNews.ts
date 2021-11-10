import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as navActions from "../State/Actions/newsActions";
import { TypeStore } from "../State/Reducers/reducers";

function useNews() {
    const news = useSelector((store: TypeStore) => store.news);
    const dispatch = useDispatch();
    const actions = bindActionCreators(navActions, dispatch);
    return { news, ...actions };
}

export default useNews;
