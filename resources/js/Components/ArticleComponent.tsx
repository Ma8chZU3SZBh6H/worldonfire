import useNews from "../Hooks/useNews";
import moment from "moment";
import { Link } from "@inertiajs/inertia-react";
import { TypeArticle, TypeFormFavorite } from "../types/Types";
import ArticleHeader from "./ArticleHeader";
import ArticleSection from "./ArticleSection";
import React, { useEffect, useState } from "react";
import useInputs from "../Hooks/useInputs";
import { Article } from "../types/Article";
import { Inertia } from "@inertiajs/inertia";

function ArticleComponent({ index, article }: TypeArticle) {
    const { news, newsActionSelect } = useNews();
    const selected = (index ?? 0) + 1;
    const favorite =
        news.favs.filter((fav: Article) => fav.title == article.title).length >
        0
            ? true
            : false;
    const favoriteHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post("/article/favorite", {
            source_id: article.source.id,
            source_name: article.source.name,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            url_img: article.urlToImage,
            published_at: article.publishedAt,
            content: article.content,
        });
    };
    const unfavoriteHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post("/article/unfavorite", {
            title: article.title,
            source_name: article.source.name,
        });
    };

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
                <div className="">{article.content}</div>

                <div className="flex justify-between w-full">
                    {article.author && <div>By {article.author}</div>}
                </div>
            </ArticleSection>

            <ArticleSection>
                {!favorite ? (
                    <form onSubmit={favoriteHandler}>
                        <input name="index" type="hidden" value={index ?? 0} />
                        <input
                            value={`Favorite`}
                            className={`cursor-pointer px-2 py-1 border-2 font-bold rounded-md  text-blue-400 border-blue-400 bg-transparent`}
                            type="submit"
                        />
                    </form>
                ) : (
                    <form onSubmit={unfavoriteHandler}>
                        <input name="index" type="hidden" value={index ?? 0} />
                        <input
                            value={`Favorited`}
                            className={`cursor-pointer px-2 py-1 border-2 rounded-md  bg-blue-500 border-transparent font-bold text-white`}
                            type="submit"
                        />
                    </form>
                )}

                <a target="_blank" className="link" href={article.url}>
                    {article.source.name}
                </a>
            </ArticleSection>
        </div>
    );
}

export default ArticleComponent;
