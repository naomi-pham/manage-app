import Banner from "@/components/landing/Banner";
import Contact from "@/components/landing/Contact";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
