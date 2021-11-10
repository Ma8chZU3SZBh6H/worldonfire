import { Inertia, Page, PageProps } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { TypePageProps } from "../types";

function Navbar() {
    const props = usePage<Page<TypePageProps>>().props;

    return (
        <nav className=" shadow-md">
            <div className=" flex justify-between px-2 py-1  items-center">
                <div className="flex items-center gap-3">
                    <div className="transition text-gray-700 hover:text-blue-700 cursor-pointer">
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-700">
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
