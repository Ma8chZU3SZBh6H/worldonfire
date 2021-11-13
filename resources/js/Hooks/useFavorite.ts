import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import { Article } from "../types/Article";
import useArticleRemapped from "./useArticleRemapped";
import useNews from "./useNews";

function useFavorite(article: Article) {
    const { news } = useNews();
    const [favorite, setFavorite] = useState(false);
    const article_remapped = useArticleRemapped(article);

    useEffect(() => {
        setFavorite(
            news.favs.filter((fav: Article) => fav.title == article.title)
                .length > 0
                ? true
                : false
        );
    }, [news.favs]);

    const favoriteReq = () => {
        Inertia.post("/article/favorite", article_remapped);
    };
    const unfavoriteReq = () => {
        Inertia.post("/article/unfavorite", article_remapped);
    };

    const toggle = () => {
        if (favorite) {
            unfavoriteReq();
        } else {
            favoriteReq();
        }
    };

    return { isFavorite: favorite, toggleFavorite: toggle };
}

export default useFavorite;
