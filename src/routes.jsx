import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import BreakingBarriers from "./components/BreakingBarriers";
import PlatformIntro from "./components/PlatformIntro";
import Testimonials from "./components/Testimonials";
import SuboxoneSteps from "./components/SuboxoneSteps";
import FeaturedOn from "./components/FeaturedOn";
import MapSection from "./components/MapSection";
import GradientBanner from "./components/GradientBanner";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BreakingBarriers />
              <PlatformIntro />
              <Testimonials />
              <SuboxoneSteps />
              <FeaturedOn />
              <MapSection />
              <GradientBanner />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;