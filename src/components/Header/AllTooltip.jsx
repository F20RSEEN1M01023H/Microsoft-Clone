// MegaMenu.jsx
import React, { useEffect, useRef, useState } from "react";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside to close
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // optional: prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  // sample menu data (6 columns)
  const menu = [
    {
      title: "Windows",
      links: ["Windows 11", "Windows 10", "Compare editions", "Update history"],
    },
    {
      title: "Surface",
      links: ["Surface Laptop", "Surface Pro", "Accessories", "Deals"],
    },
    {
      title: "Microsoft 365",
      links: ["For home", "For business", "Plans", "Education"],
    },
    {
      title: "Azure",
      links: ["Products", "Pricing", "Documentation", "Marketplace"],
    },
    {
      title: "Xbox",
      links: ["Consoles", "Games", "Xbox Game Pass", "Accessories"],
    },
    {
      title: "Support",
      links: ["Contact support", "Downloads", "Account access", "Security"],
    },
  ];

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls="mega-menu-panel"
        className="hidden md:inline-flex items-center gap-2 px-3 py-2 "
      >
        <span className="  text-gray-700 text-xs md:text-xs lg:text-sm hover:underline hover:underline-offset-3 decoration-2">
          All Microsoft
        </span>
        {/* chevron rotates when open */}
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Overlay + Panel */}
      {/* Render overlay even if closed but hidden for accessibility? we conditionally render for simplicity */}
      {open && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div
            id="mega-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            className="fixed left-0 right-0 top-[64px] z-50 mx-auto w-full h-[75vh] bg-white shadow-2xl overflow-auto transform-gpu transition-transform duration-200"
            // top value assumes your navbar is 64px tall; change if needed
            style={{ willChange: "transform" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Explore Microsoft</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M6 6l8 8M14 6l-8 8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* grid: 6 columns on large screens, fewer on small */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {menu.map((col, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold mb-3">{col.title}</h3>
                    <ul className="space-y-2 text-sm">
                      {col.links.map((link, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="block hover:underline hover:decoration-2"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* optional footer area inside the panel */}
              <div className="mt-8 border-t pt-6 text-sm text-gray-600">
                <p>Find products, solutions, and support for all your needs.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
