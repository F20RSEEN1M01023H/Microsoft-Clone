// src/components/Header/MobileControls.jsx
import React from "react";

export default function MobileControls({
  mobileMenuOpen,
  toggleMenu,
  openSearch,
  searchOpen,
}) {
  return (
    <div className="flex items-center ">
      <button
        onClick={toggleMenu}
        className={`md:hidden p-2 ${searchOpen ? "hidden" : ""}`}
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={openSearch}
        className={`p-2 md:hidden ${searchOpen ? "hidden" : ""}`}
        aria-label="Search"
      >
        <svg
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="9" cy="9" r="5" strokeWidth="1.5" />
          <path d="M17 17l-3.5-3.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
