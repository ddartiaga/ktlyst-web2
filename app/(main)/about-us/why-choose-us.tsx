import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="section" id="about">
            <div className="container text-center">
                {/* <p className="fs-12 fw-semibold text-success mb-1">
                    <span className="landing-section-heading">CUSTOMIZATION</span>
                </p>
                <h3 className="fw-semibold mb-2">
                    Designed with precision and well documented
                </h3> */}
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="fw-semibold">
                            Then Why Choose Us?
                        </h2>
                        <p className="text-muted fs-15 mb-3 fw-normal">
                            We combine deep expertise, modern technology, and a commitment to excellence to help institutions automate, innovate, and thrive in a fast-changing world.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center mx-0">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 customize-image text-center">
                        <div className="text-lg-center">
                            <Image src="/custom/img/team-1.jpg"
                                alt="team picure"
                                className="img-fluid"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5 pb-0 px-lg-2 px-5 text-start">
                        <h5 className="text-lg-start fw-semibold mb-0">
                            <mark>What Our Clients Love About Us</mark>
                        </h5>
                        <p className=" text-muted">
                            From seamless project execution to responsive, ongoing service—our clients choose Katalyst for the difference that truly drives results.
                        </p>
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div className="d-flex">
                                    <span>
                                        <i className="bx bxs-badge-check text-primary fs-18" />
                                    </span>
                                    <div className="ms-2">
                                        <h6 className="fw-semibold mb-0">
                                            Experienced Team
                                        </h6>
                                        <p className=" text-muted">
                                            10+ years of experience in sales, procurement, software engineering, DevOps, and IT consulting
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="d-flex">
                                    <span>
                                        <i className="bx bxs-badge-check text-primary fs-18" />
                                    </span>
                                    <div className="ms-2">
                                        <h6 className="fw-semibold mb-0">
                                            Client-Centered Approach
                                        </h6>
                                        <p className=" text-muted">
                                            We build long-term partnerships, not just projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="d-flex">
                                    <span>
                                        <i className="bx bxs-badge-check text-primary fs-18" />
                                    </span>
                                    <div className="ms-2">
                                        <h6 className="fw-semibold mb-0">
                                            End-to-End Solutions
                                        </h6>
                                        <p className=" text-muted">
                                            From planning and implementation to maintenance and support
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="d-flex">
                                    <span>
                                        <i className="bx bxs-badge-check text-primary fs-18" />
                                    </span>
                                    <div className="ms-2">
                                        <h6 className="fw-semibold mb-0">
                                            Security & Compliance Focused
                                        </h6>
                                        <p className=" text-muted">
                                            Data protection and regulatory compliance are at our core
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}