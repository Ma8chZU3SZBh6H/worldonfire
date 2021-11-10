import React, { ReactPropTypes } from "react";
import Navbar from "../Components/Navbar";
import { TypePropsMain } from "../types";

function Main({ children }: TypePropsMain) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Main;
