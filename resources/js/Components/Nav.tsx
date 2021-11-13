import { Link, usePage } from "@inertiajs/inertia-react";
import useNav from "../Hooks/useNav";

function Nav() {
    const { nav, navActionToggle } = useNav();
    const { url } = usePage();
    console.log(url);
    const isSelected = (page: string) => {
        if (url == page) {
            return "nav-link-selected ";
        } else {
            return "nav-link-unselected ";
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
                className={`text-xl  whitespace-nowrap ${isSelected("/")}`}
            >
                Top Headlines
            </Link>
            <Link
                href="/favorites"
                className={`text-xl whitespace-nowrap ${isSelected(
                    "/favorites"
                )}`}
            >
                Favorites
            </Link>
        </div>
    );
}

export default Nav;
