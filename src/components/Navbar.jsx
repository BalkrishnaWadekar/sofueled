import React from 'react'

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-between">
                <div className="d-flex">
                    <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                        <h3 className='mt-2 px-4'>Amazo</h3>
                    </a>
                    <form className="input-group w-auto my-auto d-none d-sm-flex">
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle h-100"
                                role="button"
                                id="dropdownMenuLink"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div><input
                            autoComplete="off"
                            type="search"
                            className="form-control rounded"
                            placeholder="Search"
                            style={{ minWidth: "525px" }}
                        />
                        <span className="input-group-text border-0 d-none d-lg-flex"
                        ><i className="fas fa-search"></i
                        ></span>
                    </form>
                </div>

                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                className="rounded-circle"
                                height="22"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            <strong className="d-none d-sm-block ms-1">balkrishna</strong>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link" href="#">
                            <span><i className="fas fa-plus-circle fa-lg"></i></span>
                        </a>
                    </li>
                    <li className="nav-item dropdown me-3 me-lg-1">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-comments fa-lg"></i>

                            <span className="badge rounded-pill badge-notification bg-danger">6</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown me-3 me-lg-1">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell fa-lg"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">12</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown me-3 me-lg-1">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-chevron-circle-down fa-lg"></i>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}
