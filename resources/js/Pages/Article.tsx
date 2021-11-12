import { useEffect, useState } from "react";
import useNews from "../Hooks/useNews";
import Main from "../Layouts/Main";
import ArticleComponent from "../Components/ArticleComponent";
import { Article as ArticleType } from "../types/Article";
import { Link, usePage } from "@inertiajs/inertia-react";

function Article() {
    const [article, setArticle] = useState<ArticleType | null>(null);
    const page = usePage();
    const { newsActionSetNews, news } = useNews();
    useEffect(() => {
        if (news.news && news.news.length > 0) {
            setArticle(news.news[0]);
        }
    }, [news.news]);
    return (
        <Main>
            <div className="flex justify-center py-4 gap-3">
                {article ? (
                    <ArticleComponent article={article} index={0} />
                ) : (
                    "Loading..."
                )}
            </div>
        </Main>
    );
}

export default Article;
