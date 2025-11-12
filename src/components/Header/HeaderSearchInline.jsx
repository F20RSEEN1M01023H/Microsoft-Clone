// src/components/Header/HeaderSearchInline.jsx
import React from "react";
import Logo from "./Logo";

export default function HeaderSearchInline({
  searchOpen,
  mobileInputRef,
  closeSearch,
}) {
  return (
    <div
      className={`absolute inset-x-4 left-4 right-4 mx-auto md:ml-6 md:mr-6 md:flex-1 md:relative ${
        searchOpen ? "block" : "hidden"
      }`}
    >
      <div className="hidden mt-3 md:flex items-center gap-6">
        <Logo className="w-[90px] md:w-[108px] h-auto" />
        <input
          ref={mobileInputRef}
          type="search"
          placeholder="Search Microsoft"
          className="w-full pl-4 pr-3 py-1 border rounded-md focus:outline-none"
        />
        <button
          onClick={closeSearch}
          className="p-2 "
          aria-label="Cancel search"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
