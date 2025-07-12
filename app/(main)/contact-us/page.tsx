import Image from "next/image";

import ContactForm from "./contact-form";
import Headquarter from "./headquarters";
import "@/public/custom/css/sticky-pin.css";

export default function Page() {
    return (
        <div className="main-content app-content">
            <div className="row justify-content-center">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-xm-12">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body p-0">
                            <div className="contact-page-banner">
                                <div className="text-center">
                                    <h3 className="fw-semibold text-fixed-white">Contact Us</h3>
                                    <h6 className="display-6 text-fixed-white mb-4 px-sm-0 px-3">
                                        Have any questions ? We would love to hear from you.
                                    </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-12">
                            <div className="card custom-card text-start contactus-form overflow-hidden border border-info">
                                <a href="javascript:void(0);" className="card-anchor" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-xl">
                                                <Image src="/custom/img/team/nina3.jpg" alt="Contact Nina" width={500} height={500} />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text text-primary mb-1 fs-16 fw-semibold">
                                                Ninz
                                            </p>
                                            <div className="card-title fs-12 mb-1">Head - Sales and Marketing</div>
                                            <div className="card-title text-muted fs-11 mb-0">0966-684-1752</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card custom-card text-start contactus-form overflow-hidden border border-info">
                                <a href="javascript:void(0);" className="card-anchor" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-xl">
                                                <Image src="/custom/img/team/dudz.jpg" alt="Contact Nina" width={500} height={500} />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text text-primary mb-1 fs-16 fw-semibold">
                                                Dudz
                                            </p>
                                            <div className="card-title fs-12 mb-1">Head - Software Development</div>
                                            <div className="card-title text-muted fs-11 mb-0">0917-872-1024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="card custom-card contactus-form overflow-hidden shadow-sm border border-info">
                                <div className="card-header">
                                    <div className="card-title">Send an Email</div>
                                </div>
                                <div className="card-body">
                                    <ContactForm />
                                </div>
                                <div className="card-footer">
                                    <p className="card-text"><span className="text-lowercase text-muted">
                                        <a href="mailto:katalysttechservices@gmail.com" className="m-1" style={{ letterSpacing: '0.5px' }}>
                                            <i className="ri-mail-check-line me-2 align-middle fs-20"></i>
                                            katalysttechservices@gmail.com
                                        </a>
                                    </span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="card custom-card contactus-form overflow-hidden shadow-sm border border-info">
                                <div className="card-header">
                                    <div className="card-title">Address: <span className="text-muted fw-normal">Block 3 Lot 1, Titan St, Amaris Homes Dasmarinas Phase 2, Burol Main, Dasmarinas City, 4114</span></div>
                                </div>
                                <div className="card-body p-2">
                                    <Headquarter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}