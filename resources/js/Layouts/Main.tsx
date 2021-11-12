import { usePage } from "@inertiajs/inertia-react";
import React, { ReactPropTypes, useEffect } from "react";
import Navbar from "../Components/Navbar";
import useNews from "../Hooks/useNews";
import { TypePropsMain } from "../types/Types";

function Main({ children }: TypePropsMain) {
    const props = usePage().props;
    const { newsActionSetNews, news } = useNews();
    useEffect(() => {
        if (props.news) {
            console.log(props.news);
            newsActionSetNews(props.news);
        }
    }, [props.news]);
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Main;
