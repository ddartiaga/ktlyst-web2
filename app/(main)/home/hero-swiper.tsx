

'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function HeroSwiper() {
    useEffect(() => {
        const swiperContainer = document.querySelector<HTMLElement & { swiper?: { destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void } }>('.swiper');
        if (!swiperContainer || !window.Swiper) return;

        if (swiperContainer.swiper) {
            swiperContainer.swiper.destroy(true, false);
        }

        const swiperInstance = new window.Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            swiperInstance.destroy(true, false);
        };
    }, []);

    const slides = [
        {
            src: '/custom/img/hero-webp/network-switch-and-ethernet-cables.webp',
            alt: 'Network switch and ethernet cables',
            labelClass: 'col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start',
            heading: 'Katalyst IT Services — Your Trusted Tech Partner',
            subheading: 'We help businesses modernize operations with reliable IT equipment, custom software, cloud consulting, and full-stack tech solutions.',
            cta: 'Explore Our Services',
            ctaLink: '#our-services',
            priority: true,
        },
        {
            src: '/custom/img/hero-webp/abstract-cybersecurity-concept-design.webp',
            alt: 'Servers',
            labelClass: 'col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start',
            heading: 'Reliable IT Hardware Delivered Fast',
            subheading: 'From uninterruptible power supplies (UPS), laptops to servers and routers — we supply quality IT equipment for every business need.',
            cta: 'Request a Quote Today',
            ctaLink: 'start',
            priority: true,
        },
        {
            src: '/custom/img/hero-webp/web-developer.webp',
            alt: 'Web developer',
            labelClass: 'col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center',
            heading: 'Custom Web and Mobile Apps That Work for You',
            subheading: 'We build scalable websites and mobile applications that drive results across devices.',
            cta: 'Start Your Project Now',
            ctaLink: 'end',
            priority: false,
        },
        {
            src: '/custom/img/hero-webp/cloud-technology.webp',
            alt: 'Cloud technology',
            labelClass: 'col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start',
            heading: 'Cloud Strategy and Migration Made Simple',
            subheading: 'Maximize performance and reduce costs with expert cloud consulting and infrastructure solutions.',
            cta: 'Talk to a Cloud Expert',
            ctaLink: 'center',
            priority: false,
        },
        {
            src: '/custom/img/hero-webp/computer-servicing.webp',
            alt: 'Computer Servicing',
            labelClass: 'col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start',
            heading: 'Reliable IT Support and System Maintenance',
            subheading: 'Prevent downtime and keep your tech running smoothly with our proactive maintenance services.',
            cta: 'Schedule a Service',
            ctaLink: 'center',
            priority: false,
        },
        {
            src: '/custom/img/hero-webp/working-technician.webp',
            alt: 'Computer Technician',
            labelClass: 'col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center',
            heading: 'Skilled IT Professionals, When You Need Them',
            subheading: 'Augment your team with certified developers, engineers, and IT support staff.',
            cta: 'Hire Now',
            ctaLink: 'center',
            priority: false,
        },
        {
            src: '/custom/img/hero-webp/software-license.webp',
            alt: 'Computer Software License',
            labelClass: 'col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start',
            heading: 'Official Software Licenses, All in One Place',
            subheading: 'We supply genuine software licenses for Windows, Microsoft 365, Adobe, and more.',
            cta: 'Get a License Quote',
            ctaLink: 'center',
            priority: false,
        },
    ];

    return (
        <>
            <section>
                <div className="swiper pagination" style={{ height: '780px' }}>
                    <div className="swiper-wrapper h-100">
                        {slides.map((slide, i) => (
                            <div key={i} className="swiper-slide position-relative h-100 w-100 overflow-hidden">
                                {/* Image */}
                                <Image
                                    priority={slide.priority}
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

                                {/* Slide Content using Bootstrap grid system */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center"
                                    style={{ zIndex: 2 }}
                                >
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className={slide.labelClass}>
                                                <h2
                                                    className="display-5 fw-semibold fs-48 mb-4 text-white mb-3 animate-heading-transition"
                                                >
                                                    {slide.heading}
                                                </h2>
                                                <p
                                                    className="lead fs-20 lh-sm mb-7 text-white animate-subheading-transition"
                                                    style={{ letterSpacing: '1px' }}
                                                >
                                                    {slide.subheading}
                                                </p>
                                                <a
                                                    href={slide.ctaLink}
                                                    className="m-1 btn btn-outline-light rounded-pill btn-wave text-white p-10 animate-cta-transition"
                                                >
                                                    {slide.cta}
                                                    {/* <i className="ri-eye-line ms-2 align-middle" /> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section >
        </>

    );
}