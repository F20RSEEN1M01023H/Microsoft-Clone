// src/components/Header/MobileMenu.jsx
import React from "react";
import Logo from "./Logo";

export default function MobileMenu({
  mobileMenuOpen,
  onClose,
  menuRef,
  navLinks = [],
  allMicrosoft = [],
}) {
  if (!mobileMenuOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" aria-hidden="true" />
      <aside
        ref={menuRef}
        className="fixed inset-y-0 left-0 z-50 w-full bg-white shadow-lg overflow-auto md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 pt-6 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="p-2" aria-label="Close menu">
                ✕
              </button>
            </div>
          </div>

          <nav className="mt-6 border-t pt-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="block py-2 text-base text-gray-800"
              >
                {l}
              </a>
            ))}
          </nav>

          <section className="mt-6 border-t pt-4">
            <h3 className=" font-bold mb-3">All Microsoft</h3>
            <div className="space-y-4">
              {allMicrosoft.map((col) => (
                <div key={col.title}>
                  <h4 className="font-medium">{col.title}</h4>
                  <ul className="mt-2 ml-2 space-y-1 text-sm text-gray-600">
                    {col.items.map((it) => (
                      <li key={it}>
                        <a href="#" className="block py-1 hover:underline">
                          {it}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p>Find products, solutions and support for everyone.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
