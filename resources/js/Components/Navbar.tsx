import { Inertia, Page, PageProps } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import useNav from "../Hooks/useNav";
import { TypePageProps } from "../types/Types";

function Navbar() {
    const props = usePage<Page<TypePageProps>>().props;
    const { navActionToggle } = useNav();
    return (
        <nav className=" shadow-md">
            <div className=" flex justify-between px-4 py-4  items-center">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navActionToggle()}
                        className="transition text-gray-700 hover:text-blue-700 cursor-pointer"
                    >
                        <i className="fas fa-bars fa-lg"></i>
                    </button>
                    <h1 className="text-2xl font-bold text-gray-700 tracking-widest">
                        <Link href="/">WorldOnFire</Link>
                    </h1>
                </div>
                <div>
                    {props.user ? (
                        <Link className="link" href="/logout" method="post">
                            Logout
                        </Link>
                    ) : (
                        <Link href="/login">Sign in</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
