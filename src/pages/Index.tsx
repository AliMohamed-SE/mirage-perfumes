import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedSection from "@/components/home/FeaturedSection";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import InstagramGallery from "@/components/home/InstagramGallery";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedSection />
      <BrandStory />
      <Testimonials />
      {/* <Newsletter /> */}
      <InstagramGallery />
    </Layout>
  );
};

export default Index;
