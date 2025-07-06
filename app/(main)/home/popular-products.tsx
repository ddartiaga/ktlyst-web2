import Image from "next/image"

const ProductItem = ({ image, label, link }: { image: string, label: string, link: string }) => {
    return (
        <div className="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
            <a href={link}>
                <div className="card custom-card bg-dark overlay-card text-fixed-white">
                    {/* <img
                        src={image}
                        className="card-img"
                        alt={label}
                    /> */}
                    <Image src={image}
                        className="card-img"
                        alt={label} width={300} height={150} />
                    <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                        <div className="card-footer border-top-0">
                            <h6 className="fw-semibold mb-0 text-fixed-white">{label}</h6>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    );
}

export default function PopularProducts() {

    const products = [
        {
            image: "/custom/img/products/ups.jpg",
            label: "UPS",
            link: "/ups"
        },
        {
            image: "/custom/img/products/laptops.jpg",
            label: "Laptops",
            link: "/laptops"
        },
        {
            image: "/custom/img/products/networking.jpg",
            label: "Routers and Switches",
            link: "/networks"
        },
        {
            image: "/custom/img/products/servers.jpg",
            label: "Servers and Data Center",
            link: "/data-center"
        },
        {
            image: "/custom/img/hero/software-license.png",
            label: "Licenses",
            link: "/software-licenses"
        },
        {
            image: "/custom/img/hero/web-developer.jpg",
            label: "Web and Mobile Apps",
            link: "/web-and-mobile-apps"
        }
    ];

    return (
        <section className="section" id="popular-products">
            <div className="container text-center">
                <h3 className="fw-semibold mb-2">
                    Popular Products
                </h3>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="d-flex justify-content-end align-items-end mb-3">
                            <p className="mb-0 fw-semibold">
                                <a href="javascript:void(0);" className="text-primary">
                                    <u>View All</u>
                                </a>
                            </p>
                        </div>
                        <div className="row">
                            {products.map((p, idx) => <ProductItem key={idx} {...p} />)}
                        </div>
                    </div>
                </div>
            </div>


        </section>


    );
}