import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Navbar() {
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
                    <Link href="/login">Sign In</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
