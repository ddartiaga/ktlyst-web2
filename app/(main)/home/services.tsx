
const ServiceItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => {

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="card custom-card text-start landing-missions">
                <div className="card-body">
                    <div className="align-items-top">
                        <div className="mb-2">
                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                <i className={`${icon} fs-25`} />
                            </span>
                        </div>
                        <div>
                            <h6 className="fw-semibold mb-1">{title}</h6>
                            <p className="mb-0 text-muted">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default function Services() {

    const services = [
        {
            icon: "ri-cpu-line",
            title: "ICT Equipment Supply",
            description: "From UPS systems and laptops to servers and routers — we supply reliable IT equipment for every business need.",
            link: "/services/ict-equipment-supply",
            color: "yellow"
        },
        {
            icon: "ri-braces-fill",
            title: "Web and Mobile Applications Development",
            description: "We build scalable websites and mobile applications that drive results across devices.",
            link: "/services/custom-web-and-mobile-applications-development",
            color: "green"
        },
        {
            icon: "ri-cloud-fill",
            title: "Cloud Consulting and Implementation",
            description: "We help businesses migrate to the cloud, optimize cloud resources, and ensure seamless cloud integration.",
            link: "/services/cloud-consulting-and-implementation",
            color: "blue"
        },
        {
            icon: "ri-service-fill",
            title: "Skilled Manpower Services",
            description: "Skilled IT professionals and technical specialists for installation, support, and infrastructure projects. ",
            link: "/services/skilled-manpower-services",
            color: "yellow"
        },
        {
            icon: "ri-tools-fill",
            title: "Hardware Maintenance and Repair",
            description: "We repair and maintain hardware devices to keep your systems running smoothly and efficiently.",
            link: "/services/hardware-maintenance-and-repair",
            color: "green"
        },
        {
            icon: "ri-shield-star-line",
            title: "Software License and Procurement",
            description: "We supply genuine software licenses for Windows, Microsoft 365, Adobe, and more.",
            link: "/services/software-license-and-procurement",
            color: "blue"
        }
    ];

    return (
        <>
            <section className="section section-bg " id="our-services">
                <div className="container text-center">
                    {/* <p className="fs-12 fw-semibold text-success mb-1">
                        <span className="landing-section-heading">OUR MISSION</span>
                    </p> */}
                    <h2 className="fw-semibold mb-2">
                        Our Services
                    </h2>
                    <div className="row justify-content-center mb-5">
                        <div className="col-xl-7">
                            <p className="text-muted fs-15mb-0 fw-normal">
                                Discover tailored solutions for your business designed to meet your
                                needs.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {services.map((service, idx) => <ServiceItem key={idx} {...service} />)}
                    </div>
                </div>
            </section>

        </>

    );
}