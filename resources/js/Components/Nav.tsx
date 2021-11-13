import { Link, usePage } from "@inertiajs/inertia-react";
import useNav from "../Hooks/useNav";

function Nav() {
    const { nav, navActionToggle } = useNav();
    const { url } = usePage();
    console.log(url);
    const isSelected = (page: string) => {
        if (url == page) {
            return " ";
        } else {
            return " ";
        }
    };

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
            <Link
                href="/"
                className={`text-xl  whitespace-nowrap ${
                    !url.includes("favorites")
                        ? "nav-link-selected"
                        : "nav-link-unselected"
                }`}
            >
                Top US Headlines
            </Link>
            <Link
                href="/favorites"
                className={`text-xl whitespace-nowrap ${
                    url.includes("favorites")
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
