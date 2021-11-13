import { useEffect, useState } from "react";
import useNews from "../Hooks/useNews";
import Main from "../Layouts/Main";
import ArticleComponent from "../Components/ArticleComponent";
import { Article, Article as ArticleType } from "../types/Article";
import { Link, usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import { Inertia } from "@inertiajs/inertia";

function Article() {
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [articleRemaped, setArticleRemaped] = useState<any | null>(null);
    const [favorite, setFavorite] = useState<boolean>(false);
    const page = usePage();
    const { newsActionSetNews, news } = useNews();
    useEffect(() => {
        if (news.news && news.news.length > 0) {
            const _article = news.news[0];
            setArticle(_article);
            setArticleRemaped({
                source_id: _article.source.id,
                source_name: _article.source.name,
                author: _article.author,
                title: _article.title,
                description: _article.description,
                url: _article.url,
                url_img: _article.urlToImage,
                published_at: _article.publishedAt,
                content: _article.content,
            });
            setFavorite(
                news.favs.filter((fav: Article) => fav.title == _article.title)
                    .length > 0
                    ? true
                    : false
            );
        }
    }, [news]);

    const favoriteHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post("/article/favorite", articleRemaped);
    };
    const unfavoriteHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post("/article/unfavorite", articleRemaped);
    };
    return (
        <Main>
            <div className="flex justify-center py-4 gap-3">
                {article ? (
                    <div className="px-8 py-6 max-w-2xl border rounded-md flex flex-col gap-3">
                        <p>
                            Published{" "}
                            <span className="font-bold">
                                {moment(article.publishedAt).fromNow()}
                            </span>
                        </p>
                        <h1 className="text-2xl font-bold">{article.title}</h1>
                        <img src={article.urlToImage} />
                        <p>{article.description}</p>
                        <p>{article.content}</p>
                        <p>
                            by{" "}
                            <span className="font-bold">{article.author}</span>
                        </p>
                        <div className="flex justify-between">
                            {!favorite ? (
                                <form onSubmit={favoriteHandler}>
                                    <input
                                        value={`Favorite`}
                                        className={`cursor-pointer px-2 py-1 border-2 font-bold rounded-md  text-blue-400 border-blue-400 bg-transparent`}
                                        type="submit"
                                    />
                                </form>
                            ) : (
                                <form onSubmit={unfavoriteHandler}>
                                    <input
                                        value={`Favorited`}
                                        className={`cursor-pointer px-2 py-1 border-2 rounded-md  bg-blue-500 border-transparent font-bold text-white`}
                                        type="submit"
                                    />
                                </form>
                            )}
                            <a
                                target="_blank"
                                className="link"
                                href={article.url}
                            >
                                {article.source.name}
                            </a>
                        </div>
                    </div>
                ) : (
                    "Loading..."
                )}
            </div>
        </Main>
    );
}

export default Article;
