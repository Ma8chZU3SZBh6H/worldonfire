import React, { ReactPropTypes } from "react";
import Navbar from "../Components/Navbar";
import { TypePropsMain } from "../types/Types";

function Main({ children }: TypePropsMain) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Main;
