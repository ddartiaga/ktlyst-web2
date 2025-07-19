import Image from "next/image";

import React from "react";
import Nav from "./NavMenu";
import { menuItems } from "./nav-items"

const SideMenuBar = () => {
  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="main-sidebar-header">
        <a href="index.html" className="header-logo">
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-logo" width={70} height={200} />
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-logo" width={70} height={200} />
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-dark" width={70} height={200} />
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-dark" width={70} height={200} />
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-white" width={70} height={200} />
          <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-white" width={70} height={200} />
        </a>
      </div>
      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <Nav item={menuItems} />
          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />{" "}
            </svg>
          </div>
        </nav>
        {/* End::nav */}
      </div>
      {/* End::main-sidebar */}
    </aside>
  );
};

export default SideMenuBar;
