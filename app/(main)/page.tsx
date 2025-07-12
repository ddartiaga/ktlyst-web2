import WhyChooseUs from "./about-us/why-choose-us";
import Brands from "./home/brands";
import CompanyProfile from "./home/company-profile";
import HomeContact from "./home/contact-us";
import HeroSwiper from "./home/hero-swiper";
import PopularProducts from "./home/popular-products";
import Services from "./home/services";
import TechStack from "./home/tech-stack";

export default function Page() {
    return (
        <>
            <div className="main-content landing-main px-0">
                <HeroSwiper />
                <CompanyProfile />
                <WhyChooseUs />
                <Services />
                <TechStack />
                <Brands />
                <PopularProducts />
                <HomeContact />
            </div>

        </>
    );
}