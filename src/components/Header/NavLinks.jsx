// src/components/Header/NavLinks.jsx
import React from "react";

export default function NavLinks({
  links = [],
  className = "px-6 space-x-6 text-xs md:text-xs lg:text-sm",
}) {
  return (
    <nav className={className}>
      {links.map((l) => (
        <a
          key={l}
          href="#"
          className="text-gray-700 hover:underline hover:underline-offset-3 decoration-2 "
        >
          {l}
        </a>
      ))}
    </nav>
  );
}
