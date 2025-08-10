

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/HomeMain";
import ContactUs from "./Pages/ContactUs";
import OurStory from "./Pages/OurStory";
import Chatbot from "./components/Chatbot";
import SolarEyeDashboard from "../src/Dashboard/SolarEye";
import NotFoundPage from "../src/components/404Pgae";
import Pricing from "./Pages/Pricing";
import Services  from "./Pages/Services";
function App() {
  return (
    <Router>
      <Chatbot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<SolarEyeDashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
