// src/components/Header/MicrosoftHome.jsx
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopActions from "./DesktopActions";
import MobileControls from "./MobileControls";
import HeaderSearchInline from "./HeaderSearchInline";
import MobileSearchBar from "./MobileSearchBar";
import MobileMenu from "./MobileMenu";
import { allMicrosoft, navLinks } from "../../data/menu"; // adjust path

export default function MicrosoftHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null);
  //   const headerSearchRef = useRef(null);
  const mobileInputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => mobileInputRef.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (!mobileMenuOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMobileMenuOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || searchOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen, searchOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((s) => !s);
    setSearchOpen(false);
  };
  const openSearch = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
  };
  const closeSearch = () => setSearchOpen(false);

  return (
    <div>
      <header
        className={`relative flex justify-between items-center px-4 sm:px-6 md:px-6 lg:px-8 h-14 bg-white ${
          searchOpen ? "hidden md:block" : ""
        }`}
      >
        <div className="flex items-center">
          <MobileControls
            mobileMenuOpen={mobileMenuOpen}
            toggleMenu={toggleMobileMenu}
            openSearch={openSearch}
            searchOpen={searchOpen}
          />
          <div
            className={`hidden md:flex items-center ${
              searchOpen ? "md:hidden" : ""
            }`}
          >
            <Logo />
            <NavLinks links={navLinks} />
          </div>
        </div>

        <div
          className={`absolute left-1/2 transform -translate-x-1/2 md:hidden md:transform-none ${
            searchOpen ? "hidden" : ""
          }`}
        >
          <Logo />
        </div>

        <div className="flex items-center ">
          <DesktopActions searchOpen={searchOpen} onSearchOpen={openSearch} />
        </div>

        <HeaderSearchInline
          searchOpen={searchOpen}
          mobileInputRef={mobileInputRef}
          closeSearch={closeSearch}
        />
      </header>

      <MobileSearchBar
        searchOpen={searchOpen}
        mobileInputRef={mobileInputRef}
        closeSearch={closeSearch}
      />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menuRef={menuRef}
        navLinks={navLinks}
        allMicrosoft={allMicrosoft}
      />
    </div>
  );
}
