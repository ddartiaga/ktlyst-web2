import Headquarter from "../contact/map";

export default function HomeContact() {
    return (
        <section className="section" id="contact">
            <div className="container text-center">
                {/* <p className="fs-12 fw-semibold text-success mb-1">
                    <span className="landing-section-heading">CONTACT US</span>
                </p> */}
                <h3 className="fw-semibold mb-2">
                    Have any questions ? We would love to hear from you.
                </h3>
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <p className="text-muted fs-15 mb-5 fw-normal">
                            You can contact us anytime regarding any queries or deals,dont
                            hesitate to clear your doubts before trying our product.
                        </p>
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="card custom-card border shadow-none">
                            <div className="card-body p-0">
                                <Headquarter />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="card custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                            <div className="card-body">
                                <div className="row gy-3 mt-2 px-3">
                                    <div className="col-xl-6">
                                        <div className="row gy-3">
                                            <div className="col-xl-12">
                                                <label
                                                    htmlFor="contact-address-name"
                                                    className="form-label "
                                                >
                                                    Full Name :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    id="contact-address-name"
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                            <div className="col-xl-12">
                                                <label
                                                    htmlFor="contact-address-phone"
                                                    className="form-label "
                                                >
                                                    Phone No :
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    id="contact-address-phone"
                                                    placeholder="Enter Phone No"
                                                />
                                            </div>
                                            <div className="col-xl-12">
                                                <label
                                                    htmlFor="contact-address-address"
                                                    className="form-label "
                                                >
                                                    Address :
                                                </label>
                                                <textarea
                                                    className="form-control "
                                                    id="contact-address-address"
                                                    rows={1}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label
                                            htmlFor="contact-address-message"
                                            className="form-label "
                                        >
                                            Message :
                                        </label>
                                        <textarea
                                            className="form-control "
                                            id="contact-address-message"
                                            rows={8}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="d-flex  mt-4 ">
                                            <div className="">
                                                <div className="btn-list">
                                                    <button className="btn btn-icon btn-primary-light btn-wave">
                                                        <i className="ri-facebook-line fw-bold" />
                                                    </button>
                                                    <button className="btn btn-icon btn-primary-light btn-wave">
                                                        <i className="ri-twitter-x-line fw-bold" />
                                                    </button>
                                                    <button className="btn btn-icon btn-primary-light btn-wave">
                                                        <i className="ri-instagram-line fw-bold" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <button className="btn btn-primary  btn-wave">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
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