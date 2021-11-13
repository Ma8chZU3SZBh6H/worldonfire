import { Inertia } from "@inertiajs/inertia";
import { Article } from "../types/Article";
import useArticleRemapped from "./useArticleRemapped";

function useArticleCreateForm(article: Article) {
    const article_remapped = useArticleRemapped(article);

    const openReq = () => {
        Inertia.post("/article/create", article_remapped);
    };

    return { open: openReq };
}

export default useArticleCreateForm;
