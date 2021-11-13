import { useEffect, useState } from "react";
import useNews from "../Hooks/useNews";
import Main from "../Layouts/Main";
import { Article, Article as ArticleType } from "../types/Article";
import ArticleFullComponent from "../Components/ArticleFullComponent";

function Article() {
    const [article, setArticle] = useState<ArticleType | null>(null);
    const { news } = useNews();
    useEffect(() => {
        if (news.news && news.news.length > 0) {
            setArticle(news.news[0]);
        }
    }, [news]);

    return (
        <Main>
            <div className="flex justify-center py-4 gap-3">
                {article ? (
                    <ArticleFullComponent article={article} />
                ) : (
                    "Loading..."
                )}
            </div>
        </Main>
    );
}

export default Article;
