import React from "react";
import Script from "next/script";
import Switcher from "@/components/ui/core/main/Switcher";
import Header from "@/components/ui/core/main/Header";
import NavBar from "@/components/ui/core/main/NavBar";
import Copyright from "@/components/ui/core/Copyright";

import { Metadata } from "next";

import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/css/styles.css";
import "@/public/assets/css/icons.css";
import "@/public/assets/libs/node-waves/waves.min.css";
import "@/public/assets/libs/simplebar/simplebar.min.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";
import "@/public/assets/libs/flatpickr/flatpickr.min.css";
import "@/public/assets/libs/@simonwep/pickr/themes/nano.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";
import "@/public/custom/libs/scrollcue/scrollCue.css";
import "@/public/custom/css/app.css";



export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Katalyst IT Sevices",
        description: "Katalyst Website",
        authors: [{ name: "Katalyst Team", url: "https://katalysttechservices.com" }],
    }
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr" data-nav-layout="horizontal" data-nav-style="menu-click" data-menu-position="fixed" data-theme-mode="light">
            <body className="landing-body multi-page">
                <Switcher />

                <div className="landing-page-wrapper">
                    <Header />
                    <NavBar />

                    {children}
                    <Copyright />
                </div>

                <div className="scrollToTop">
                    <span className="arrow"><i className="ri-arrow-up-s-fill fs-20"></i></span>
                </div>

                <div id="responsive-overlay"></div>

                <Script
                    id="local-storage"
                    dangerouslySetInnerHTML={{
                        __html: `
                        if(localStorage.ynexlandingdarktheme){
                            document.querySelector("html").setAttribute("data-theme-mode","dark")
                        }

                        if(localStorage.ynexlandingrtl){
                            document.querySelector("html").setAttribute("dir","rtl")
                            document.querySelector("#style")?.setAttribute("href", "/assets/libs/bootstrap/css/bootstrap.rtl.min.css");
                        }
                        `,
                    }}
                />



                <Script src="/assets/js/main.js"></Script>

                <Script src="/assets/libs/@popperjs/core/umd/popper.min.js"></Script>
                <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></Script>
                <Script src="/assets/libs/@simonwep/pickr/pickr.es5.min.js"></Script>
                <Script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"></Script>
                <Script src="/assets/libs/swiper/swiper-bundle.min.js"></Script>
                <Script src="/assets/js/defaultmenu.min.js"></Script>
                <Script src="/assets/js/landing.js"></Script>
                <Script src="/assets/libs/node-waves/waves.min.js"></Script>
                <Script src="/assets/js/sticky.js"></Script>

                <Script src="/assets/libs/simplebar/simplebar.min.js"></Script>



                <Script src="/assets/js/swiper.js"></Script>
                <Script src="/custom/libs/scrollcue/scrollCue.min.js"></Script>

                <Script src="/custom/js/app.js"></Script>

                {/* for admin layout */}
                {/* <Script src="/assets/js/simplebar.js"></Script>
                <Script src="/assets/js/custom-switcher.min.js"></Script>
                <Script src="/assets/js/custom.js"></Script> */}
            </body>
        </html>
    );
}