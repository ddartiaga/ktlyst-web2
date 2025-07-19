import Image from "next/image";
import Link from "next/link";

import { items } from "./nav-items";
import { NavMenu } from "./NavMenu";

export default function NavBar() {
    return (
        <aside className="app-sidebar sticky" id="sidebar">
            <div className="container-xl">

                <div className="main-sidebar">

                    <nav className="main-menu-container nav nav-pills sub-open">
                        <div className="landing-logo-container">
                            <div className="horizontal-logo">
                                <Link href={"/"} className="header-logo">
                                    <Image src="/custom/img/kata-logo.png" alt="logo" className="desktop-logo" width={70} height={60} />
                                    <Image src="/custom/img/kata-logo.png" alt="logo" className="desktop-white" width={70} height={60} />
                                </Link>
                            </div>
                        </div>
                        <div className="slide-left" id="slide-left">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#7b8191"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />{" "}
                            </svg>
                        </div>
                        <ul className="main-menu">
                            {items.map((item) => (
                                <NavMenu key={item.label} item={item} />
                            ))}
                        </ul>
                        <div className="slide-right" id="slide-right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#7b8191"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />{" "}
                            </svg>
                        </div>
                        <div className="d-lg-flex d-none">
                            <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                <Link href={"/dashboard"} className="btn btn-wave btn-primary">
                                    Get Started
                                </Link>
                                {/* <button
                                    className="btn btn-wave btn-icon btn-light switcher-icon"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas"
                                >
                                    <i className="ri-settings-3-line" />
                                </button> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </aside>

    );
}