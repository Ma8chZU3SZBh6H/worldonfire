import { Link, usePage } from "@inertiajs/inertia-react";
import useNav from "../Hooks/useNav";

function Nav() {
    const { nav } = useNav();
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
        <div className="flex flex-col gap-3 py-4 pr-2 md:relative absolute bg-white h-screen shadow-md">
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
