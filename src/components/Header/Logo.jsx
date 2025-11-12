// src/components/Header/Logo.jsx
import React from "react";
import imgLogo from "../../assets/RE1Mu3b.png";

export default function Logo({
  className = "w-[90px] md:w-[108px] h-auto flex-shrink-0",
  alt = "MicrosoftLogo",
}) {
  return <img className={className} src={imgLogo} alt={alt} />;
}
