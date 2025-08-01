
import HeroSection from "./HeroSection";
import SolarDroneHomepage from "./OurStory";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CallToAction from "./CallToAction";
import TechnologyStackSection from "./TechnologyStack";
import Features from "./Features";
import AdditionalSections from "./Add";
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";
import RandomPackages from "./RandomPackages";
import HowItWorks from "./HowItWorks";
// import Chatbot from "../ChatBot/Chatbot"; // Importing Chatbot Component

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <OurStory />
      <RandomPackages />
      <Features />
      <HowItWorks />
      {/* <CallToAction /> */}
      {/* <AdditionalSections/> */}
      {/* <TechnologyStackSection/> */}
      {/* <Testimonials/> */}
      <Footer />

     
    </div>
  );
}
