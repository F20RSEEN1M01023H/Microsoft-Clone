// src/components/Header/DesktopActions.jsx
import React from "react";
import AllTooltip from "./AllTooltip"; // adjust path if AllTooltip is elsewhere

export default function DesktopActions({
  searchOpen,
  onSearchOpen,
  //   className = "",
}) {
  return (
    <div className="flex items-center space-x-4">
      <div
        className={`hidden md:block ${searchOpen ? "hidden md:hidden" : ""}`}
      >
        <AllTooltip />
      </div>

      <button
        onClick={onSearchOpen}
        className={`p-2 hidden md:block ${
          searchOpen ? "hidden md:hidden" : ""
        }`}
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

      <button
        className={`p-2 ${searchOpen ? "hidden md:hidden" : ""}`}
        aria-label="Cart"
      >
        <svg
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M6 6h15l-1.5 9h-13z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
        </svg>
      </button>

      <button
        className={`p-2 ${searchOpen ? "hidden md:hidden" : ""}`}
        aria-label="Profile"
      >
        <svg
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="4" />
          <path
            d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
