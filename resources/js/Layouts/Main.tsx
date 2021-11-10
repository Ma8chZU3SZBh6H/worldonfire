import React, { ReactPropTypes } from "react";
import Navbar from "../Components/Navbar";
import { TypePropsMain } from "../types";

function Main({ children }: TypePropsMain) {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 pb-4 pt-8">{children}</div>
        </div>
    );
}

export default Main;
