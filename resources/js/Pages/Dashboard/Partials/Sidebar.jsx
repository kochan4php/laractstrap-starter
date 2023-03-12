import { Link } from "@inertiajs/react";

const Sidebar = ({ auth, linkMainDashboard }) => {
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className='sidebar-nav' id='sidebar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link collapsed' href={route("home")}>
                        <i className='bi bi-house'></i>
                        <span>Home</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    {auth.role.identifier === "admin" && (
                        <Link
                            className={`nav-link ${
                                !route().current("admin.dashboard.index") &&
                                "collapsed"
                            }`}
                            href={route("admin.dashboard.index")}
                        >
                            <i className='bi bi-grid'></i>
                            <span>Admin Dashboard</span>
                        </Link>
                    )}
                    {auth.role.identifier === "member" && (
                        <Link
                            className={`nav-link ${
                                !route().current("member.dashboard.index") &&
                                "collapsed"
                            }`}
                            href={route("member.dashboard.index")}
                        >
                            <i className='bi bi-grid'></i>
                            <span>Member Dashboard</span>
                        </Link>
                    )}
                </li>

                <li className='nav-item'>
                    <a
                        className='nav-link collapsed'
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
                        href='#'
                    >
                        <i className='bi bi-menu-button-wide'></i>
                        <span>Components</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id='components-nav'
                        className='nav-content collapse '
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href='components-alerts.html'>
                                <i className='bi bi-circle'></i>
                                <span>Alerts</span>
                            </a>
                        </li>
                        <li>
                            <a href='components-pagination.html'>
                                <i className='bi bi-circle'></i>
                                <span>Pagination</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-heading'>Pages</li>

                <li className='nav-item'>
                    <Link className='nav-link collapsed' href='#'>
                        <i className='bi bi-person'></i>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
