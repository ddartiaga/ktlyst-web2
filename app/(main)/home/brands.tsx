
import Image from "next/image";

const BrandItem = ({ brandName }: { brandName: string }) => {
    return (
        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
            <div className="p-3 text-center rounded-2 bg-white border">
                <Image
                    src={`/custom/img/brands/${brandName}.png`}
                    alt={`${brandName}`}
                    width={120}
                    height={40}
                    loading="eager" // forces it to load immediately
                    className="object-contain img-fluid"
                />
            </div>
        </div>
    );
}

export default function Brands() {

    const brands = [
        "apc",
        "aruba",
        "avaya",
        "aws",
        "cisco",
        "dell",
        "epson",
        "fortinet",
        "hpe",
        "microsoft",
        "phoenix",
        "santak",
        "veeam",
        "vmware",
    ];

    return (
        <section className="section " id="top-brands">
            <div className="container text-center position-relative">
                {/* <p className="fs-12 fw-semibold text-success mb-1">
                    <span className="landing-section-heading">STATISTICS</span>
                </p> */}
                <h3 className="fw-semibold mb-2">Top Tech Brands We Offer: Laptops, Servers, UPS & More</h3>
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <p className="text-muted fs-15 mb-5 fw-normal">
                            We are proud to have top class clients and customers,which motivates
                            us to work more on projects.
                        </p>
                    </div>
                </div>
                <div className="row  g-2 justify-content-center">
                    <div className="col-xl-12">
                        <div className="row justify-content-evenly">
                            {brands.map((name) => <BrandItem brandName={name} key={name} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}