import { Article } from "../../types/Article";
import { newsConstants } from "../Constants/newsConstants";

export function newsActionSelect(id: number) {
    return {
        type: newsConstants.SELECT,
        payload: id,
    };
}

export function newsActionSetNews(news: Array<Article> | unknown) {
    return {
        type: newsConstants.SET_NEWS,
        payload: news,
    };
}
