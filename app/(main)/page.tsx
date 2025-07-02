

export default function Page() {
    return (
        <>
            <div className="landing-banner" id="home">
                <section className="section">
                    <div className="container main-banner-container pb-lg-0">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
                                <div className="py-lg-5">
                                    <div className="mb-3">
                                        <h5 className="fw-semibold text-fixed-white op-9">
                                            BRILLIANCE IN EXECUTION
                                        </h5>
                                    </div>
                                    <p className="landing-banner-heading mb-3">
                                        Your sure stop place for best theme ends here with{" "}
                                        <span className="text-secondary">YNEX !</span>
                                    </p>
                                    <div className="fs-16 mb-5 text-fixed-white op-7">
                                        ynex - Now you can use this admin template to design stunning
                                        dashboards that will wow your target viewers or users to no end.
                                    </div>
                                    <a href="index.html" className="m-1 btn btn-primary">
                                        View Demos
                                        <i className="ri-eye-line ms-2 align-middle" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4">
                                <div className="text-end landing-main-image landing-heading-img">
                                    {/* <img
                                        src="/assets/images/media/landing/1.png"
                                        alt=""
                                        className="img-fluid"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}