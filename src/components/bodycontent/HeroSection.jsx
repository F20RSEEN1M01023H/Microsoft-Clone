import React from "react";
import hero1 from "../../assets/Hero-Desktop-M365-Premium-Glass-Icon-Bounce-Homepage_VP2-859x540.avif";
import hero2 from "../../assets/Hero-Desktop-M365-Premium-Glass-Icon-Bounce-Homepage_VP4-1399x600.avif";
import SectionOne from "./SectionOne";

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <SectionOne
        hero2={hero2}
        hero1={hero1}
        title="Microsoft 365"
        desc="  Introducing Microsoft 365 Premium with our highest usage limits
                and exclusive Copilot features for AI power users."
        cta="Discover Microsoft 365 Premium"
        bta="See other Microsoft 365 options"
      />
    </div>
  );
};

export default HeroSection;
