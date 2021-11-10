import { Inertia, Page, PageProps } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { TypePageProps } from "../types";

function Navbar() {
    const props = usePage<Page<TypePageProps>>().props;

    return (
        <nav className=" shadow-md">
            <div className="max-w-7xl flex justify-between px-2 py-1 mx-auto">
                <div className="flex items-center gap-3">
                    <i className="fas fa-bars tex"></i>
                    <h1 className="text-2xl">
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
