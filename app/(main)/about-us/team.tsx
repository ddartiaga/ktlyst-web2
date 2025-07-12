import Image from "next/image";
const TeamMember = ({ name, image, role, description }: { name: string, image: string, role: string, description: string }) => {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="card custom-card text-center team-card">
                <div className="card-body p-5">
                    <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                        <Image src={image} alt={name} width={500} height={500} />
                    </span>
                    <p className="fw-semibold fs-17 mb-0 text-default">{name}</p>
                    <span className="text-muted fs-14 text-primary fw-semibold">
                        {role}
                    </span>
                    <p className="text-muted mt-2 fs-16">
                        {description}
                    </p>
                    {/* <div className="mt-2">
                        <a href="profile.html" className="btn btn-light" target="_blank">
                            View profile
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default function Team() {

    const teamMembers = [
        {
            name: "Ninz",
            image: "/custom/img/team/nina3.jpg",
            role: "Lead - Sales and Marketing",
            description: "With over 10 years of experience, Ninz specializes in government bidding and procurement, particularly in the supply of ICT hardware. She’s known for her sharp grasp of public sector processes, strong client relationships, and a proven track record of winning and delivering high-value contracts. Ninz combines strategy with hands-on expertise to help institutions navigate complex procurement with confidence."
        },
        {
            name: "Dudz",
            image: "/custom/img/team/dudz.jpg",
            role: "Software Architect",
            description: "With over a decade of experience in software engineering, Dudz specializes in designing and building high-performance applications that scale. His passion lies in creating systems that are not just functional—but efficient, reliable, and future-ready. From architecture to deployment, Dudz brings a deep technical skill set and a commitment to excellence that helps turn complex challenges into elegant solutions."
        },

    ];

    return (
        <section className="section section-bg" id="team">
            <div className="container text-center">
                {/* <p className="fs-12 fw-semibold text-success mb-1">
                    <span className="landing-section-heading">OUR TEAM</span>
                </p>
                <h3 className="fw-semibold mb-2">
                    Great things in business are done by a team.
                </h3> */}
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h3 className="fw-semibold">
                            Behind Every Success Is a Strong Team
                        </h3>
                        <p className="text-muted fs-15 mb-3 fw-normal">
                            Our team is made up of highly skilled professionals committed to excellence, continuously raising the standards of our organization.
                        </p>
                    </div>
                </div>
                {/* <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <p className="text-muted fs-15 mb-5 fw-normal">
                            Our team consists of highly qulified employees that works hard to
                            raise company standards.
                        </p>
                    </div>
                </div> */}
                <div className="row text-center justify-content-center">
                    {teamMembers.map((mem) => <TeamMember key={mem.name} {...mem} />)}
                </div>
                {/* <div className="mt-5">
                    <button className="btn btn-primary">View All</button>
                </div> */}
            </div>
        </section>

    );
}