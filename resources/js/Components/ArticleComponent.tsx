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
import useFavorite from "../Hooks/useFavorite";
import useArticleCreateForm from "../Hooks/useArticleCreateForm";

function ArticleComponent({ index, article }: TypeArticle) {
    const { news, newsActionSelect } = useNews();
    const { isFavorite, toggleFavorite } = useFavorite(article);
    const { open } = useArticleCreateForm(article);
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
                <div className="flex flex-col gap-3 w-full">
                    <div className="">{article.content}</div>

                    <div className="flex justify-between ga">
                        <a target="_blank" className="link" href={article.url}>
                            {article.source.name}
                        </a>
                        {article.author && <div>By {article.author}</div>}
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={toggleFavorite}
                            className={isFavorite ? "btn-unfav" : "btn-fav"}
                        >
                            {isFavorite ? "Favorited" : "Favorite"}
                        </button>
                        <button onClick={open} className="link bg-transparent">
                            Open
                        </button>
                    </div>
                </div>
            </ArticleSection>
        </div>
    );
}

export default ArticleComponent;
