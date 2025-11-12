// src/components/Header/MobileSearchBar.jsx
import React from "react";
import Logo from "./Logo";

export default function MobileSearchBar({
  searchOpen,
  mobileInputRef,
  closeSearch,
}) {
  if (!searchOpen) return null;
  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2 m-2 px-4 bg-white">
        <button
          onClick={closeSearch}
          className="p-2 rounded-md"
          aria-label="Back"
        >
          <svg
            className="h-5 w-5 text-gray-700"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M12 16L6 10l6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <input
          ref={mobileInputRef}
          type="search"
          placeholder="Search Microsoft"
          className="flex-1 pr-3 px-2 py-1 border rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
}
