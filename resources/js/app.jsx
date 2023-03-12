import "./bootstrap";

import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "tippy.js/dist/tippy.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "~/app.css";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    title: (title) => {
        window.document.title = `${title} - Inertia.js`;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
