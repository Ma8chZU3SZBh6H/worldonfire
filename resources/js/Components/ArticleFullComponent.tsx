import moment from "moment";
import useFavorite from "../Hooks/useFavorite";
import { Article } from "../types/Article";
import { TypeFullArticle } from "../types/Types";
//@ts-ignore
import { ReactComponent, Head } from "@inertiajs/inertia-react";

function ArticleFullComponent({ article }: TypeFullArticle) {
    const { isFavorite, toggleFavorite } = useFavorite(article);
    return (
        <>
            <Head title={article.title} />
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
                    by <span className="font-bold">{article.author}</span>
                </p>
                <div className="flex justify-between">
                    <button
                        onClick={toggleFavorite}
                        className={isFavorite ? "btn-unfav" : "btn-fav"}
                    >
                        {isFavorite ? "Favorited" : "Favorite"}
                    </button>
                    <a target="_blank" className="link" href={article.url}>
                        {article.source.name}
                    </a>
                </div>
            </div>
        </>
    );
}

export default ArticleFullComponent;
