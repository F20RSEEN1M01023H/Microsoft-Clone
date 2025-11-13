import React from "react";
import hero1 from "../../assets/Hero-Desktop-M365-Premium-Glass-Icon-Bounce-Homepage_VP2-859x540.avif";
import hero2 from "../../assets/Hero-Desktop-M365-Premium-Glass-Icon-Bounce-Homepage_VP4-1399x600.avif";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

import card1 from "../../assets/card1.avif";
import card2 from "../../assets/crad2.avif";
import card3 from "../../assets/card3.avif";
import card4 from "../../assets/card4.webp";
import SectionThree from "./SectionThree";
import hero3 from "../../assets/hero3.avif";
import SectionFour from "./SectionFour";
import bcard1 from "../../assets/bcard1.avif";
import bcard2 from "../../assets/bcard2.avif";
import bcard3 from "../../assets/bcard3.avif";
import bcard4 from "../../assets/bcard4.webp";
import SectionFive from "./SectionFive";

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
      <SectionTwo
        cards={[
          {
            img: card1,
            title: "Designed for life today – and tomorrow",
            desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
            ctaText: "See if your PC is ready",
          },
          {
            img: card2,
            title: "Bring the world closer with Bing Wallpaper",
            desc: "Download the free app and enjoy breathtaking views with a new background each day.",
            ctaText: "Get Bing Wallpaper",
          },
          {
            img: card3,
            title: "Microsoft Edge",
            desc: "World-class performance with more privacy, more productivity and more value while you browse.",
            ctaText: "Download now",
          },
          {
            img: card4,
            title: "Microsoft OneDrive",
            desc: "Save your files and photos to OneDrive and access them from any device, anywhere.",
            ctaText: "Learn more",
          },
        ]}
      />
      <SectionThree
        hero3={hero3}
        title="Organise your life"
        desc="  Keep your ideas and notes organised with OneNote."
        cta="Learn more"
      />
      <SectionFour
        cards={[
          {
            img: bcard1,
            title: "Microsoft 365 Copilot",
            desc: "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
            ctaText: "Learn more",
          },
          {
            img: bcard2,
            title: "Get Microsoft Teams for your business",
            desc: "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.",
            ctaText: "Find the right plan for your business",
          },
          {
            img: bcard3,
            title: "Visual Studio 2022",
            desc: "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.",
            ctaText: "Download Visual Studio 2022",
          },
          {
            img: bcard4,
            title: "Welcome to your Windows 365 Cloud PC",
            desc: "Securely stream your Windows experience from the Microsoft cloud to any device.",
            ctaText: "Get it today",
          },
        ]}
      />
      <SectionFive />
    </div>
  );
};

export default HeroSection;
