import Image from "next/image";
export default function Header() {

    return (
        <header className="app-header">

            <div className="main-header-container container-fluid">
                <div className="header-content-left">
                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <Image src="/custom/img/kata-logo.png" alt="logo" className="toggle-logo" width={70} height={200} />
                                <Image src="/custom/img/kata-logo.png" alt="logo" className="toggle-dark" width={70} height={200} />
                                {/* <img
                                    src="/assets/images/brand-logos/toggle-logo.png"
                                    alt="logo"
                                    className="toggle-logo"
                                />
                                <img
                                    src="/assets/images/brand-logos/toggle-dark.png"
                                    alt="logo"
                                    className="toggle-dark"
                                /> */}
                            </a>
                        </div>
                    </div>

                    <div className="header-element">
                        <a
                            href="javascript:void(0);"
                            className="sidemenu-toggle header-link"
                            data-bs-toggle="sidebar"
                        >
                            <span className="open-toggle">
                                <i className="ri-menu-3-line fs-20" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="header-content-right">
                    <div className="header-element align-items-center">
                        <div className="btn-list d-lg-none d-block">
                            <a href="sign-up-basic.html" className="btn btn-primary-light">
                                Sign Up
                            </a>
                            <button
                                className="btn btn-icon btn-success switcher-icon"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#switcher-canvas"
                            >
                                <i className="ri-settings-3-line" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}