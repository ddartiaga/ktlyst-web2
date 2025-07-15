

import Link from "next/link";
import "@/public/custom/css/sticky-pin.css";

export default function Page() {
    return (
        <div className="main-content app-content">

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="card custom-card overflow-scroll shadow-lg">
                                <div className="card-body p-0">
                                    <div className="p-3 terms-heading-cover d-flex align-items-center text-fixed-white bg-primary h5 fw-semibold mb-0">
                                        <span className="avatar avatar-md me-3">
                                            <img src="../assets/images/media/media-67.png" alt="" />
                                        </span>{" "}
                                        KATALYST - Terms &amp; Conditions
                                        {/* <a
                                            href="javascript:void(0);"
                                            data-bs-toggle="card-fullscreen"
                                            className="ms-auto text-fixed-white"
                                        >
                                            <i className="ri-fullscreen-line" />
                                        </a> */}
                                    </div>
                                    <div className="p-4 text-muted terms-conditions" id="terms-scroll">

                                        <h6 className="fw-bold pb-3 text-default op-7">
                                            <span className="terms-heading">Terms &amp; Services :</span>
                                        </h6>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                1. Services Overview
                                            </p>
                                            <p className="op-7 mb-1">
                                                Katalyst offers a wide range of IT solutions including:
                                            </p>
                                            <ul>
                                                <li>Cloud-native development and automation</li>
                                                <li>Custom software and web applications</li>
                                                <li>Infrastructure modernization</li>
                                                <li>Hardware/software sourcing</li>
                                                <li>Consulting, support, and training</li>
                                            </ul>
                                            <div>All service details and deliverables will be outlined in individual proposals or contracts.</div>
                                        </div>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                2. Eligibility
                                            </p>
                                            <p className="op-7 mb-2">
                                                You must be at least 18 years old or have legal authority to act on behalf of an entity to use our services.
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                3. Use of Services
                                            </p>
                                            <p className="op-7 mb-2">
                                                You agree to:
                                            </p>
                                            <ul>
                                                <li>Use our services for lawful purposes only</li>
                                                <li>Not interfere with system integrity or security</li>
                                                <li>Not reverse-engineer or copy our proprietary systems</li>
                                                <li>Provide accurate information when requested</li>
                                            </ul>
                                        </div>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                4. Intellectual Property
                                            </p>
                                            <p className="op-7 mb-2">
                                                All content, designs, source code, and documentation developed by Katalyst remain our property unless otherwise stated in a written agreement. Any tools or reusable code components may be licensed to the client for use but not transferred outright.
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                5. Confidentiality
                                            </p>
                                            <p className="op-7 mb-2">
                                                Both parties agree to maintain the confidentiality of all non-public information shared during service delivery. This obligation continues even after the engagement ends.
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                6. Payment Terms
                                            </p>
                                            <p className="op-7 mb-2">
                                                Fees and payment schedules are defined in the service agreement. Invoices are due based on the agreed timeline. Late payments may incur interest and could result in service suspension.
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                7. Warranties & Disclaimers
                                            </p>
                                            <p className="op-7 mb-2">
                                                We strive to deliver high-quality services, but we do not warrant that:
                                            </p>
                                            <ul>
                                                <li>Services will be error-free or uninterrupted</li>
                                                <li>Software will meet every use case unless specified</li>
                                                <li>ICT Equipments are defect-free</li>
                                            </ul>
                                            <div>All services are provided &ldquo;as is&ldquo; unless otherwise agreed in writing.</div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                8. Limitation of Liability
                                            </p>
                                            <p className="op-7 mb-2">
                                                Katalyst is not liable for indirect, incidental, or consequential damages, including lost profits or data, arising from your use of our services.
                                                <br /><br />
                                                Maximum liability is limited to the amount paid by the client for the services giving rise to the claim.
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                9. Termination
                                            </p>
                                            <p className="op-7 mb-2">
                                                We may terminate services if:
                                            </p>
                                            <ul>
                                                <li>You breach these Terms</li>
                                                <li>You fail to pay on time</li>
                                                <li>You engage in unlawful or abusive behavior</li>
                                            </ul>
                                            <div>Upon termination, any outstanding fees become due, and access to deliverables may be restricted until resolved.</div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                10. Governing Law
                                            </p>
                                            <p className="op-7 mb-2">
                                                These Terms shall be governed by the laws of the <strong>Republic of the Philippines</strong>, unless otherwise specified in a separate agreement.
                                            </p>
                                        </div>

                                        <div className="mb-2">
                                            <p className="fw-semibold text-muted mb-2 fs-14">
                                                11. Contact Us
                                            </p>
                                            <p className="op-7 mb-2">
                                                For questions or concerns:
                                            </p>
                                            <div className="text-primary"><strong>KATALYST IT SERVICES</strong></div>
                                            <div><strong>Email: </strong><a href="mailto:katalysttechservices@gmail.com">katalysttechservices@gmail.com</a></div>
                                            <div><strong>Contact: </strong> 0966-684-1752 / 0917-872-1024 </div>
                                            <div><strong>Website: </strong> <Link href="/">katalysttechservices.com</Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card-footer d-sm-flex d-block align-items-center justify-content-between shadow-lg">
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="privacy-policy"
                                            />
                                            <label
                                                className="form-check-label text-muted"
                                                htmlFor="privacy-policy"
                                            >
                                                I agree with the
                                            </label>
                                            <a
                                                href="javascript:void(0);"
                                                className="fw-semibold text-muted ms-1"
                                            >
                                                <u>Privacy Policy</u>
                                            </a>
                                        </div>
                                        <div className="form-check d-block">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="terms_conditions"
                                            />
                                            <label
                                                className="form-check-label text-muted"
                                                htmlFor="terms_conditions"
                                            >
                                                I agree with the
                                            </label>
                                            <a
                                                href="javascript:void(0);"
                                                className="fw-semibold text-muted ms-1"
                                            >
                                                <u>Terms &amp; Conditions</u>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="btn-list mt-sm-0 mt-2">
                                        <button className="btn btn-outline-danger btn-wave">DECLINE</button>
                                        <button className="btn btn-primary btn-wave">ACCEPT</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}