import CompanyProfile from "../home/company-profile"

import "@/public/custom/css/sticky-pin.css";
import WhyChooseUs from "./why-choose-us";
import Team from "./team";
import AboutBanner from "./about-banner";

export default function Page() {
    return (
        <>
            <div className="main-content app-content">
                <AboutBanner />
                <CompanyProfile />
                <WhyChooseUs />
                <Team />
            </div>
        </>
    );
}