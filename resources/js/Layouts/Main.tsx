import { usePage } from "@inertiajs/inertia-react";
import React, { ReactPropTypes, useEffect } from "react";
import Navbar from "../Components/Navbar";
import useNews from "../Hooks/useNews";
import { TypePropsMain } from "../types/Types";

function Main({ children }: TypePropsMain) {
    const props = usePage().props;
    const { newsActionSetNews, news, newsActionSetFavs } = useNews();
    useEffect(() => {
        if (props.news) {
            console.log(props.news);
            newsActionSetNews(props.news);
        }
        if (props.favs) {
            console.log(props.favs);
            newsActionSetFavs(props.favs);
        }
    }, [props]);
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Main;
