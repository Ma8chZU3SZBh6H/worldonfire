import { Link, usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import useNav from "../Hooks/useNav";

function Nav() {
    const { nav, navActionToggle } = useNav();
    const { url } = usePage();
    const [selectedTab, setSelectedTab] = useState("/");

    useEffect(() => {
        (() => {
            if (url.includes("search")) return setSelectedTab("search");
            if (url.includes("favorites")) return setSelectedTab("favorites");
            if (url.includes("/")) return setSelectedTab("home");
        })();
    }, [url]);

    return (
        <div className="flex flex-col gap-3 py-4 pr-2 md:sticky fixed h-screen md:shadow-none shadow-md top-0 bg-white">
            <div className="flex justify-end px-4 md:hidden">
                <button
                    onClick={() => navActionToggle()}
                    className="transition text-gray-700 hover:text-blue-700 cursor-pointer"
                >
                    <i className="fas fa-bars fa-lg"></i>
                </button>
            </div>
            {selectedTab == "search" && (
                <Link
                    href="/"
                    className={`text-xl  whitespace-nowrap ${
                        selectedTab == "search"
                            ? "nav-link-selected"
                            : "nav-link-unselected"
                    }`}
                >
                    Search
                </Link>
            )}
            <Link
                href="/"
                className={`text-xl  whitespace-nowrap ${
                    selectedTab == "home"
                        ? "nav-link-selected"
                        : "nav-link-unselected"
                }`}
            >
                Top US Headlines
            </Link>
            <Link
                href="/favorites"
                className={`text-xl whitespace-nowrap ${
                    selectedTab == "favorites"
                        ? "nav-link-selected"
                        : "nav-link-unselected"
                }`}
            >
                Favorites
            </Link>
        </div>
    );
}

export default Nav;
