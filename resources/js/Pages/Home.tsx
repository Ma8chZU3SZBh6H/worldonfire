import { Link, usePage } from "@inertiajs/inertia-react";

import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import useNav from "../Hooks/useNav";
import useNews from "../Hooks/useNews";
import Main from "../Layouts/Main";
import { Article as ArticleType } from "../types/Article";
import Article from "../Components/ArticleComponent";
import Nav from "../Components/Nav";
import { Page } from "@inertiajs/inertia";
import { TypePageProps } from "../types/Types";
import Pagination from "../Components/Pagination";

const Home = () => {
    const { nav } = useNav();
    const { newsActionSetNews, news, newsActionSelect } = useNews();
    const [title, setTitle] = useState("Top Headlines");
    const { page } = usePage<Page<TypePageProps>>().props;

    return (
        <Main>
            <div className={` gap-1 flex  items-start`}>
                {nav.expanded && <Nav />}
                <div className="flex flex-col gap-3">
                    <div className="py-4 px-4 flex gap-3 flex-wrap justify-center items-baseline">
                        {news.news.length ? (
                            news.news.map(
                                (article: ArticleType, index: number) => (
                                    <Article
                                        key={index}
                                        article={article}
                                        index={index + 1}
                                    />
                                )
                            )
                        ) : (
                            <div>Nothing found!</div>
                        )}
                    </div>
                    {page && <Pagination page={page} />}
                </div>
            </div>
        </Main>
    );
};

export default Home;
