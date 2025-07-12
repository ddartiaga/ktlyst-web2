import ContactForm from "../contact-us/contact-form";
import Headquarters from "../contact-us/headquarters";

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
                            <div className="card-body p-2">
                                <Headquarters />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="card custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                            <div className="card-header">
                                <div className="card-title">Get In Touch <i className="ri-hand me-3 text-warning fw-normal"></i></div>
                            </div>
                            <div className="card-body">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}