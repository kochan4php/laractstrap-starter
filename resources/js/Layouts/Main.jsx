import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const MainLayout = ({ children, title, auth }) => {
    return (
        <>
            <Head>
                <title>{title ?? "Home"}</title>
            </Head>
            <Navbar auth={auth} />
            <main className='container mt-3'>{children}</main>
        </>
    );
};

export default MainLayout;
