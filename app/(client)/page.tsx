import Container from "@/components/container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import LandingPage from "@/components/LandingPage";
import OurBrands from "@/components/OurBrands";
import Testimonial from "@/components/Testimonial";
import VideoLandingPage from "@/components/VideoLandingPage";


export default function Home() {
  return (
    <div>
      <LandingPage/>
      <OurBrands/>
      <VideoLandingPage/>
      <Container className="py-10">
      <HomeBanner />
      <ProductGrid />
      </Container>
      
      <Testimonial/>
    </div>
  );
};
