import Image from "next/image";


export default function Page() {
    const slides = [
        {
            src: '/custom/img/hero/network-switch-and-ethernet-cables.jpg',
            alt: 'Network switch and ethernet cables',
            heading: 'Secure Your Network',
            subheading: 'High-performance and scalable infrastructure',
            cta: 'Explore Solutions',
            align: 'start', // left
        },
        {
            src: '/custom/img/hero/cloud-technology.jpg',
            alt: 'Cloud technology',
            heading: 'Cloud First',
            subheading: 'Deploy smarter with modern cloud platforms',
            cta: 'Start Building',
            align: 'center', // center
        },
        {
            src: '/custom/img/hero/web-developer.jpg',
            alt: 'Web developer',
            heading: 'Modern Applications',
            subheading: 'Develop faster, better, and cleaner',
            cta: 'Let’s Talk',
            align: 'end', // right
        },
    ];

    const getTextAlignClass = (align: string) => {
        switch (align) {
          case 'start':
            return 'text-start justify-content-start';
          case 'center':
            return 'text-center justify-content-center';
          case 'end':
            return 'text-end justify-content-end';
          default:
            return 'text-center justify-content-center';
        }
      };

    return (
        <>
            {/* <div className="landing-banner" id="home">
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
                                    <img
                                        src="/assets/images/media/landing/1.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

            <section>
                <div className="swiper pagination" style={{ height: '780px' }}>
                    <div className="swiper-wrapper h-100">
                        {slides.map((slide, i) => (
                            <div key={i} className="swiper-slide position-relative h-100 w-100 overflow-hidden">
                                {/* Image */}
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-0"
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                />

                                {/* Overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                                        zIndex: 1,
                                    }}
                                />

                                {/* Slide Content using Flexbox */}
                                <div
                                    className={`position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-${slide.align} text-white px-4 px-md-5 w-100 h-100`}
                                    style={{ zIndex: 2 }}
                                >
                                    <div
                                        className={`text-${slide.align} ${slide.align === 'start' ? 'ms-md-7' : slide.align === 'end' ? 'me-md-7' : ''}`}
                                        style={{ maxWidth: '720px' }}
                                    >
                                        <div className="mb-3">
                                            <h1 className="fw-semibold text-fixed-white op-9">
                                                {slide.heading}
                                            </h1>
                                        </div>
                                        <div className="fs-16 mb-5 text-fixed-white op-7">
                                            {slide.subheading}
                                        </div>
                                        <a href="index.html" className="m-1 btn btn-primary">
                                            {slide.cta}
                                            <i className="ri-eye-line ms-2 align-middle" />
                                        </a>
                                        {/* <h1 className="display-4 fw-bold mb-3"></h1> */}
                                        {/* <p className="lead mb-4">{slide.subheading}</p> */}
                                        {/* <a href="#" className="btn btn-primary btn-lg">
                                            {slide.cta}
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>

        </>
    );
}