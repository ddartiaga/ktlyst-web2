import RotatorText from "@/components/ui/core/widgets/RotatorText";

export default function CompanyProfile() {

    return (
        <>

            <section className="section" id="company-profile">
                <div className="container text-center">
                    {/* <p className="fs-30 fw-semibold text-primary mb-1">
                    <span className="">COMPANY PROFILE</span>
                </p> */}

                    {/* {/* <h3 className="fw-semibold mb-2">
                    Designed with precision and well documented
                </h3> */}
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 className="display-6 fw-semibold">
                                Who Are We and What We Do?
                            </h1>
                            <p className="text-muted fs-15 mb-3 fw-normal">
                                We are Katalyst — a future-driven IT solutions company that believes in the power of automation, innovation, and honest transformation.

                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center mx-0">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 customize-image text-center">
                            <h1 className="display-5 fs-34 mb-5 mx-md-n5 mx-lg-0 mt-7 fw-semibold">
                                A technology solutions provider <br />
                                specializing on <br />
                                <span className="text-primary">
                                    <RotatorText texts={['ICT Hardware Procurement', 'Web and Mobile Apps Development', 'Cloud Consulting', 'Computer Servicing', 'Skilled IT Manpower', 'Software Licenses']} />
                                </span>
                            </h1>
                            <p className="lead fs-lg mb-7">
                                We help businesses modernize their infrastructure and automate manual processes—end to end.
                            </p>
                            <span>
                                <a href="mailto:katalysttechservices@gmail.com" className="btn btn-lg btn-primary rounded-pill me-2">Send Email <i className="ri-send-plane-fill ms-2 align-middle" /></a>
                            </span>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5 pb-0 px-lg-2 px-5 text-start">
                            <h5 className="text-lg-start fw-semibold mb-3">
                                A partner that supports your growth every step of the way.
                            </h5>
                            <p className="text-muted fs-16">
                                <strong className="text-primary">Katalyst I.T. Services</strong> is a
                                technology solutions provider dedicated to empowering businesses
                                through digital innovation. We specialize in procurement and delivery
                                of ICT equipments, custom web and mobile applications development,
                                cloud consulting, system maintenance and skilled manpower services. Our tailored
                                solutions help clients streamline operations, modernize
                                infrastructure, and stay competitive in a rapidly evolving digital
                                landscape—whether you&apos;re a startup or an enterprise.
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div className="d-flex">
                                        <span>
                                            <i className="bx bxs-badge-check text-primary fs-18" />
                                        </span>
                                        <div className="ms-2">
                                            <h6 className="fw-semibold mb-0">
                                                Our Vision
                                            </h6>
                                            <p className=" text-muted">
                                            To be the trusted partner in delivering IT equipment, custom software solutions, and skilled workforce services that drive innovation and sustainable growth for our clients.
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
                                                Our Mission
                                            </h6>
                                            <p className=" text-muted">
                                                To empower institutions through digitalization, automation and infrastructure modernization.
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
                                                Our Mantra
                                            </h6>
                                            <p className=" text-muted">
                                                We automate the unnecessary, serve with integrity, and create honest change that works in harmony with your people and purpose.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}