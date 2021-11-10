import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./State/Reducers/reducers";

const app = document.getElementById("app");
const store = createStore(reducers, composeWithDevTools());

render(
    <Provider store={store}>
        <InertiaApp
            initialPage={JSON.parse(app.dataset.page)}
            resolveComponent={(name) =>
                import(`./Pages/${name}`).then((module) => module.default)
            }
        />
    </Provider>,
    app
);
