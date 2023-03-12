import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ auth }) => {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className='container'>
                <Link className='navbar-brand' href={route("home")}>
                    Laravel Inertia React Bootstrap
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-between'
                    id='navbarNavDropdown'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' href={route("home")}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href={route("home")}>
                                Features
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href={route("about")}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <button
                                className='nav-link dropdown-toggle bg-transparent border-0'
                                type='button'
                                data-bs-toggle='dropdown'
                            >
                                Dropdown link
                            </button>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        href={route("home")}
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        href={route("home")}
                                    >
                                        Another Action
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        href={route("home")}
                                    >
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='navbar-nav gap-2'>
                        {auth ? (
                            <>
                                {auth.role.identifier === "admin" && (
                                    <li className='nav-item'>
                                        <Link
                                            className='btn btn-success w-100'
                                            href={route(
                                                "admin.dashboard.index"
                                            )}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                                {auth.role.identifier === "member" && (
                                    <li className='nav-item'>
                                        <Link
                                            className='btn btn-success w-100'
                                            href={route(
                                                "member.dashboard.index"
                                            )}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                            </>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <Link
                                        className='btn btn-success w-100'
                                        href={route("login.index")}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
