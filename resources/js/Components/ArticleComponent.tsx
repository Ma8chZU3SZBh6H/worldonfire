import useNews from "../Hooks/useNews";
import moment from "moment";
import { Link } from "@inertiajs/inertia-react";
import { TypeArticle } from "../types/Types";
import ArticleHeader from "./ArticleHeader";
import ArticleSection from "./ArticleSection";

function ArticleComponent({ index, article }: TypeArticle) {
    const { news, newsActionSelect } = useNews();
    const selected = (index ?? 0) + 1;

    return (
        <div
            onClick={() => newsActionSelect(selected)}
            className={`px-8 py-6 border rounded-md flex flex-col gap-3 transition max-w-2xl  ${
                news.selected == selected || !index
                    ? "bg-blue-50"
                    : "hover:bg-blue-50 cursor-pointer"
            }`}
        >
            <ArticleHeader url={article.urlToImage}>
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-lg">{article.title}</p>
                    <div>{moment(article.publishedAt).fromNow()}</div>
                </div>

                {article.urlToImage && (
                    <div
                        className="bg-cover bg-center h-20 w-20 rounded"
                        style={{
                            backgroundImage: `url("${article.urlToImage}")`,
                        }}
                    ></div>
                )}
            </ArticleHeader>

            <ArticleSection>{article.description}</ArticleSection>

            <ArticleSection index={selected} expanded={index ? false : true}>
                <div className="  ">{article.content}</div>

                <div className=" flex justify-between w-full">
                    <a target="_blank" className="link" href={article.url}>
                        {article.source.name}
                    </a>
                    {article.author && <div>By {article.author}</div>}
                </div>
            </ArticleSection>

            <ArticleSection>
                <button className="px-2 py-1 border-2 font-bold text-blue-400 rounded-md border-blue-400">
                    Favorite
                </button>
                <Link className="link" href={`/article/${article.title}`}>
                    Share
                </Link>
            </ArticleSection>
        </div>
    );
}

export default ArticleComponent;
