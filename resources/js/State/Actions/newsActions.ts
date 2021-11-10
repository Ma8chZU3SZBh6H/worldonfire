import { newsConstants } from "../Constants/newsConstants";

export function newsActionSelect(id: number) {
    return {
        type: newsConstants.SELECT,
        payload: id,
    };
}

export function newsActionSetNews(news: Array<Object>) {
    return {
        type: newsConstants.SET_NEWS,
        payload: news,
    };
}
