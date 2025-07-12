import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="section landing-footer text-fixed-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6 col-12 mb-md-0 mb-3">
                        <div className="px-4">
                            <p className="fw-semibold mb-3">
                                <Link href="/">
                                    <Image src="/custom/img/kata-logo.png" alt="logo" className="toggle-dark" width={150} height={75} />
                                </Link>
                            </p>
                            <p className="mb-2 op-6 fw-normal">
                                <span className="fw-bold">Katalyst IT Services</span> is a technology solutions provider dedicated to empowering businesses through digital innovation. We specialize in procurement and delivery of ICT equipments, custom web and mobile applications development, cloud consulting, system maintenance and skilled manpower services.
                            </p>
                            {/* <p className="mb-0 op-6 fw-normal">
                                Our tailored solutions help clients streamline operations, modernize infrastructure, and stay competitive in a rapidly evolving digital landscape—whether you're a startup or an enterprise.
                            </p> */}
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="px-4">
                            <h6 className="fw-semibold mb-3 text-fixed-white">QUICK LINKS</h6>
                            <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                                <li>
                                    <Link href="/" className="text-fixed-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="text-fixed-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="text-fixed-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-and-conditions" className="text-fixed-white">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className="text-fixed-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="px-4">
                            <h6 className="fw-semibold text-fixed-white">CONTACT</h6>
                            <ul className="list-unstyled fw-normal landing-footer-list">
                                <li>
                                    <a href="javascript:void(0);" className="text-fixed-white op-6">
                                        <i className="ri-home-4-line me-1 align-middle" /> Burol Main, Dasmarinas City, Philippines, 4114
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="text-fixed-white op-6">
                                        <i className="ri-mail-line me-1 align-middle" /> katalysttechservices@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="text-fixed-white op-6">
                                        <i className="ri-phone-line me-1 align-middle" /> +(63) 917-872-1024
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="text-fixed-white op-6">
                                        <i className="ri-phone-line me-1 align-middle" /> +(63) 966-684-1752
                                    </a>
                                </li>
                                {/* <li className="mt-3">
                                    <p className="mb-2 fw-semibold op-8">FOLLOW US ON :</p>
                                    <div className="mb-0">
                                        <div className="btn-list">
                                            <button className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line fw-bold" />
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-x-line fw-bold" />
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line fw-bold" />
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                <i className="ri-github-line fw-bold" />
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                <i className="ri-youtube-line fw-bold" />
                                            </button>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}