import { Head as HeadInertia } from "@inertiajs/react";

const Head = ({ title }) => (
    <HeadInertia>
        <title>{title ?? "Home"}</title>
    </HeadInertia>
);

export default Head;
