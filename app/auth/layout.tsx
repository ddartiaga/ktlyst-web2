import React from "react";
import Script from "next/script";
import Switcher from "@/components/ui/layouts/main/Switcher";

import { Metadata } from "next";

import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/css/styles.css";
import "@/public/assets/css/icons.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";


import "@/public/assets/libs/node-waves/waves.min.css";
import "@/public/assets/libs/simplebar/simplebar.min.css";
import "@/public/assets/libs/swiper/swiper-bundle.min.css";
import "@/public/assets/libs/flatpickr/flatpickr.min.css";
import "@/public/assets/libs/@simonwep/pickr/themes/nano.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/custom/libs/scrollcue/scrollCue.css";
import "@/public/custom/css/app.css";



export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Katalyst",
        description: "Katalyst IT Services",
        authors: [{ name: "Katalyst IT Services", url: "https://katalysttechservices.com" }],
    }
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr" data-nav-layout="vertical" data-vertical-style="overlay" data-theme-mode="light" data-header-styles="light" data-menu-styles="light" data-toggled="close">
            <body className="bg-white">
                <Switcher />

                <div className="row authentication mx-0">
                    {children}
                </div>

                <Script src="/assets/js/authentication-main.js"></Script>
                <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></Script>
                <Script src="/assets/libs/swiper/swiper-bundle.min.js"></Script>
                <Script src="/assets/js/authentication.js"></Script>
                <Script src="/assets/js/show-password.js"></Script>

                <Script src="/assets/libs/@popperjs/core/umd/popper.min.js"></Script>
                <Script src="/assets/libs/@simonwep/pickr/pickr.es5.min.js"></Script>
                <Script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"></Script>
                <Script src="/assets/libs/node-waves/waves.min.js"></Script>

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