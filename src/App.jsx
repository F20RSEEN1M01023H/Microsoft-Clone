import React from "react";
import MicrosoftHome from "./components/Header/MicrosoftHome";
import HeroSection from "./components/bodycontent/HeroSection";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <MicrosoftHome />
      <HeroSection />
      <Footer
        footerCols={[
          {
            title: "What's new",
            links: [
              "Surface Pro",
              "Copilot for organizations",
              "Copilot for personal use",
              "Microsoft 365",
              "Explore Microsoft products",
              "Windows 11 apps",
            ],
          },
          {
            title: "Microsoft Store",
            links: [
              "Account profile",
              "Download Center",
              "Returns",
              "Order tracking",
            ],
          },
          {
            title: "Education",
            links: [
              " Microsoft in education",
              "Devices for education",
              "Microsoft Teams for Education",
              "Microsoft 365 Education",
              "Office Education",
              "Educator training and development",
              "Deals for students and parents",
              "Azure for students",
            ],
          },
          {
            title: "Business",
            links: [
              "Microsoft Cloud",
              "Microsoft Security",
              "Azure",
              "Dynamics 365",
              "Microsoft 365",
              "Microsoft Advertising",
              "Microsoft 365 Copilot",
              "Microsoft Teams",
            ],
          },
          {
            title: "Developer & IT",
            links: [
              "Microsoft Developer",
              "Documentation",
              "Microsoft Learn",
              "Microsoft Tech Community",
              "Microsoft Marketplace",
              "Microsoft Power Platform",
              "Visual Studio",
            ],
          },
          {
            title: "Company",
            links: [
              "Careers",
              "About Microsoft",
              "Company news",
              "Privacy at Microsoft",
              "Investors",
              "Sustainability",
            ],
          },
        ]}
        bottomLinks={[
          "Contact",
          "Microsoft",
          "Privacy",
          "Terms of use",
          "Trademarks ",
          "About our ads",
          "© Microsoft 2025",
        ]}
      />
    </div>
  );
};

export default App;
