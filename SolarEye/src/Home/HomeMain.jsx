import HeroSection from "./HeroSection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CallToAction from "./CallToAction";
import Features from "./Features";
import OurStory from "./OurStory";
import HowItWorks from "./HowItWorks";
import Services from "./Services";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <OurStory />
      <Services />
      <HowItWorks />
      {/* <Features /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}
