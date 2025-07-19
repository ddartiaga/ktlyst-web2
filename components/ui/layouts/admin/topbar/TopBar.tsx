
import Image from "next/image";
import NavBarSearch from "./NavBarSearch";
import NavBarCountry from "./NavBarCountry";
import NavBarCart from "./NavBarCart";
import NavBarNotification from "./NavBarNotification";
import NavBarFullScreen from "./NavBarFullScreen";
import NavBarShortCut from "./NavBarShortCut";
import NavBarProfile from "./NavBarProfile";
import NavBarOffCanvas from "./NavBarOffCanvas";
import NavBarTheme from "./NavBarTheme";

export const revalidate = false;
const TopBar = () => {
  return (
    <>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <a href="index.html" className="header-logo">


                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-logo" width={70} height={200} />
                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-logo" width={70} height={200} />
                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-dark" width={70} height={200} />
                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-dark" width={70} height={200} />
                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="desktop-white" width={70} height={200} />
                  <Image src="/custom/img/kata-logo.png" loading="eager" alt="logo" className="toggle-white" width={70} height={200} />



                </a>
              </div>
            </div>
            <div className="header-element">
              <a
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
              >
                <span />
              </a>
            </div>
          </div>
          <div className="header-content-right">
            <NavBarSearch />
            <NavBarCountry />
            <NavBarTheme />
            <NavBarCart />
            <NavBarNotification />
            <NavBarShortCut />
            <NavBarFullScreen />
            <NavBarProfile />
            <NavBarOffCanvas />
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
