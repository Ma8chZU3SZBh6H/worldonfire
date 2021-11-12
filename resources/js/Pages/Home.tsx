import { Link, usePage } from "@inertiajs/inertia-react";

import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import useNav from "../Hooks/useNav";
import useNews from "../Hooks/useNews";
import Main from "../Layouts/Main";
import { Article as ArticleType } from "../types/Article";
import Article from "../Components/ArticleComponent";

const Home = () => {
    const { nav } = useNav();
    const { newsActionSetNews, news, newsActionSelect } = useNews();

    return (
        <Main>
            <div className={` gap-1 flex`}>
                {nav.expanded && (
                    <div className="flex flex-col gap-3 py-4">
                        <Link href="" className="nav-link-selected">
                            Home
                        </Link>
                        <Link href="" className="nav-link-unselected">
                            Favorites
                        </Link>
                    </div>
                )}
                <div className="py-4 px-4 flex gap-3 flex-wrap justify-center items-baseline">
                    {news.news.map((article: ArticleType, index: number) => (
                        <Article article={article} index={index + 1} />
                    ))}
                </div>
            </div>
        </Main>
    );
};

export default Home;
