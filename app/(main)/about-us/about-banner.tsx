import Image from "next/image";

export default function AboutBanner() {
    return (
        <div className="aboutus-banner">
            <div className="aboutus-banner-content">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6">
                        <div className="row justify-content-center">
                            <div className="col-xxl-9 col-xl-9 col-lg-10 col-md-8 col-sm-10 col-12">
                                <div className="p-3 text-start mb-4">
                                    <h6 className="fw-semibold text-fixed-white pb-4">
                                        <span className="about-heading-white">About Us</span>
                                    </h6>
                                    <h3 className="fw-semibold mb-2 text-fixed-white pb-4">
                                        OUR VALUE PROPOSITION
                                    </h3>
                                    <h6 className="fw-semibold mb-2 text-fixed-white">
                                        Empowering institutions through digitalization, automation and infrastructure modernization.
                                    </h6>
                                    <p className="mb-4 fw-normal op-7 fs-16">
                                        At Katalyst, we help organizations modernize infrastructure, automate operations, and deliver better outcomes—faster. Our end-to-end solutions—from supplying reliable ICT hardware to building custom software—are designed to save time, reduce costs, and eliminate operational inefficiencies.
                                    </p>
                                    <p className="mb-4 fw-normal op-7 fs-16">
                                        We combine technical expertise, deep industry knowledge, and a relentless focus on quality to drive long-term impact for every client we serve.
                                    </p>
                                    <button className="btn btn-primary btn-wave">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 aboutus-banner-img">
                        <Image src="/assets/images/media/media-80.svg"
                            className="img-fluid"
                            alt="" width={500} height={500} />

                    </div>
                    <div className="col-xl-12 about-company-stats">
                        <div className="row justify-content-center">
                            <div className="col-xxl-5 col-xl-8 col-lg-10 col-md-8 col-sm-10 col-10">
                                <div className="card custom-card text-default shadow card-bg-primary">

                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 about-company-stats-border">

                                                <div className="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                    <div>
                                                        <blockquote className="blockquote mb-0 text-center">
                                                            <h6 className="text-fixed-white">To be the trusted partner in delivering IT equipment, custom software solutions, and skilled workforce services that drive innovation and sustainable growth for our clients.</h6>
                                                            <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Our Vision</footer>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}