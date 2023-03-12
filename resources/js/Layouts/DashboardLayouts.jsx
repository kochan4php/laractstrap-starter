import Head from "@/Components/Head";
import Footer from "@/Pages/Dashboard/Partials/Footer";
import Header from "@/Pages/Dashboard/Partials/Header";
import Sidebar from "@/Pages/Dashboard/Partials/Sidebar";
import "@/dashboard.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "~/dashboard.css";

const DashboardLayouts = ({ children, auth, linkMainDashboard }) => {
    return (
        <>
            <Head title='Dashboard' />

            <Header auth={auth} linkMainDashboard={linkMainDashboard} />

            <Sidebar auth={auth} linkMainDashboard={linkMainDashboard} />

            <main id='main' className='main'>
                {children}
            </main>

            <Footer />

            <a
                href='#'
                className='back-to-top d-flex align-items-center justify-content-center'
            >
                <i className='bi bi-arrow-up-short'></i>
            </a>
        </>
    );
};

export default DashboardLayouts;
