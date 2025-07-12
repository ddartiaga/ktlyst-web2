
export default function ContactForm() {
    return (
        <div className="row gy-3">
            <div className="col-xl-6">
                <label
                    htmlFor="contact-address-firstname"
                    className="form-label"
                >
                    First Name :
                </label>
                <input
                    type="text"
                    className="form-control form-control-light"
                    id="contact-address-firstname"
                    placeholder="Enter Name"
                />
            </div>
            <div className="col-xl-6">
                <label
                    htmlFor="contact-address-lastname"
                    className="form-label"
                >
                    Last Name :
                </label>
                <input
                    type="text"
                    className="form-control form-control-light"
                    id="contact-address-lastname"
                    placeholder="Enter Name"
                />
            </div>
            <div className="col-xl-6">
                <label htmlFor="contact-address-phone" className="form-label">
                    Phone No :
                </label>
                <input
                    type="text"
                    className="form-control form-control-light"
                    id="contact-address-phone"
                    placeholder="Enter Phone No"
                />
            </div>
            <div className="col-xl-6">
                <label htmlFor="contact-address-email" className="form-label">
                    Email Id :
                </label>
                <input
                    type="email"
                    className="form-control form-control-light"
                    id="contact-address-email"
                    placeholder="Enter Email Id"
                />
            </div>
            <div className="col-xl-6">
                <label htmlFor="contact-address-address" className="form-label">
                    Address :
                </label>
                <textarea
                    className="form-control form-control-light"
                    id="contact-address-address"
                    rows={2}
                    defaultValue={""}
                />
            </div>
            <div className="col-xl-6">
                <label htmlFor="contact-mail-message" className="form-label">
                    Message :
                </label>
                <textarea
                    className="form-control form-control-light"
                    id="contact-mail-message"
                    rows={2}
                    defaultValue={""}
                />
            </div>
            <div className="col-xl-12">
                <div className="text-center d-grid">
                    <button className="btn btn-primary-light btn-wave">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}