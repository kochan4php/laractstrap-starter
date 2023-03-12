import MainLayout from "@/Layouts/Main";
import { Link } from "@inertiajs/react";
import React from "react";

const About = (props) => {
    return (
        <MainLayout auth={props.auth.user}>
            <h1>About Page</h1>
            <Link href={route("home")}>Home</Link>
        </MainLayout>
    );
};

export default About;
