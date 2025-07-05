import Image from "next/image";

const SwiperItem = ({ brandName }: { brandName: string }) => {
    return (
        <div className="swiper-slide d-flex align-items-center justify-content-center" style={{ height: '80px' }}>
            <Image
                src={`/custom/img/brands/${brandName}.png`}
                alt={`${brandName}`}
                width={120}
                height={60}
                className="object-contain"
                style={{ maxWidth: '120px', maxHeight: '60px' }}
            />
        </div>
    );
}

export default function BrandSwiper() {

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
        <section className="section landing-testimonials section-bg" id="testimonials">
            <div className="container text-center">
                <p className="fs-12 fw-semibold text-success mb-1">
                    <span className="landing-section-heading">OUR PARTNERS</span>
                </p>
                <h3 className="fw-semibold mb-2">Trusted by leading brands</h3>
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <p className="text-muted fs-15 mb-5 fw-normal">
                            We work with industry leaders to deliver exceptional solutions.
                        </p>
                    </div>
                </div>
                <div className="swiper brands-swiper text-start">
                    <div className="swiper-wrapper">
                        {brands.map((name) => <SwiperItem brandName={name} key={name} />)}
                    </div>
                    <div className="swiper-pagination mt-4" />
                </div>
            </div>
        </section>
    );
}