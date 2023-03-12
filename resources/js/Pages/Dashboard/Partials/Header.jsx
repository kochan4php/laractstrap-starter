import { Link } from "@inertiajs/react";
import { useEffect, useRef } from "react";

const Header = ({ auth, linkMainDashboard }) => {
    const toggleSidebar = useRef(null);
    const toggleSearcBar = useRef(null);
    const searchBar = useRef(null);
    console.log(auth);

    useEffect(() => {
        toggleSidebar.current.addEventListener("click", function () {
            document.body.classList.toggle("toggle-sidebar");
        });

        toggleSearcBar.current.addEventListener("click", function () {
            searchBar.current.classList.toggle("search-bar-show");
        });
    }, []);

    return (
        <header
            id='header'
            className='header fixed-top d-flex align-items-center'
        >
            <div className='d-flex align-items-center justify-content-between'>
                <Link
                    href={linkMainDashboard}
                    className='logo d-flex align-items-center'
                >
                    <img src='/assets/img/logo.png' alt='' />
                    <span className='d-none d-lg-block'>NiceAdmin</span>
                </Link>
                <i
                    className='bi bi-list toggle-sidebar-btn'
                    ref={toggleSidebar}
                ></i>
            </div>

            <div className='search-bar' ref={searchBar}>
                <form className='search-form d-flex align-items-center'>
                    <input
                        type='text'
                        name='query'
                        placeholder='Search'
                        title='Enter search keyword'
                    />
                    <button type='submit' title='Search'>
                        <i className='bi bi-search'></i>
                    </button>
                </form>
            </div>

            <nav className='header-nav ms-auto'>
                <ul className='d-flex align-items-center'>
                    <li className='nav-item d-block d-lg-none'>
                        <a
                            className='nav-link nav-icon search-bar-toggle'
                            ref={toggleSearcBar}
                            href='#'
                        >
                            <i className='bi bi-search'></i>
                        </a>
                    </li>

                    <li className='nav-item dropdown'>
                        <a
                            className='nav-link nav-icon'
                            href='#'
                            data-bs-toggle='dropdown'
                        >
                            <i className='bi bi-bell'></i>
                            <span className='badge bg-primary badge-number'>
                                4
                            </span>
                        </a>

                        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
                            <li className='dropdown-header'>
                                You have 4 new notifications
                                <a href='#'>
                                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                                        View all
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li className='notification-item'>
                                <i className='bi bi-exclamation-circle text-warning'></i>
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li className='notification-item'>
                                <i className='bi bi-x-circle text-danger'></i>
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li>
                                <hr className='dropdown-divider' />
                            </li>
                            <li className='dropdown-footer'>
                                <a href='#'>Show all notifications</a>
                            </li>
                        </ul>
                    </li>

                    <li className='nav-item dropdown pe-3'>
                        <a
                            className='nav-link nav-profile d-flex align-items-center gap-3'
                            href='#'
                            data-bs-toggle='dropdown'
                        >
                            <span className='d-none d-md-block dropdown-toggle'>
                                {auth.username}
                            </span>
                            <img
                                src='/assets/img/profile-img.jpg'
                                alt='Profile'
                                className='rounded-circle'
                            />
                        </a>

                        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                            <li className='dropdown-header'>
                                <h6>{auth.name}</h6>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li>
                                <a
                                    className='dropdown-item d-flex align-items-center'
                                    href='users-profile.html'
                                >
                                    <i className='bi bi-person'></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li>
                                <a
                                    className='dropdown-item d-flex align-items-center'
                                    href='users-profile.html'
                                >
                                    <i className='bi bi-gear'></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li>
                                <a
                                    className='dropdown-item d-flex align-items-center'
                                    href='pages-faq.html'
                                >
                                    <i className='bi bi-question-circle'></i>
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>

                            <li>
                                <Link
                                    className='dropdown-item d-flex align-items-center'
                                    href={route("logout")}
                                    as='button'
                                    method='POST'
                                >
                                    <i className='bi bi-box-arrow-right'></i>
                                    <span>Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
