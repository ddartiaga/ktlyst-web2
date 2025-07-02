import app from "@/package.json";

export default function Copyright() {
    return (
        <div className="text-center landing-main-footer py-3 text-muted fs-15">
            <span className="">
                Copyright © <span id="year" />{" "}
                <a href="https://katalysttechservices.com" className="text-primary fw-semibold">
                    <u>Katalyst IT Services</u>
                </a>. All rights reserved
            </span>
            <span> | </span>
            <span>Version: {app.version}</span>
        </div>

    )
}