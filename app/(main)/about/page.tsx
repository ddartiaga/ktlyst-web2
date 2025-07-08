import CompanyProfile from "../home/company-profile"

import "@/public/custom/css/sticky-pin.css";

export default function Page() {
    return (
        <>
            <div className="main-content app-content">
                <div className="container-fluid">
                    <CompanyProfile />
                </div>
            </div>
        </>
    );

}