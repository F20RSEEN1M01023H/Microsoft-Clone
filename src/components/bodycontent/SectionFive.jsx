// src/components/SimpleFollowSection.jsx
import React, { useEffect, useRef, useState } from "react";

export default function SimpleFollowSection() {
  const sectionRef = useRef(null);

  // showButton: whether to show the back-to-top button at all
  const [showButton, setShowButton] = useState(false);

  // insideSection: whether the viewport bottom is inside this section
  // (we then position the button inside the section)
  const [insideSection, setInsideSection] = useState(false);

  useEffect(() => {
    function checkScroll() {
      const scrolled = window.scrollY || window.pageYOffset;

      // Show button after user scrolled 200px (adjust if you want)
      setShowButton(scrolled > 200);

      const el = sectionRef.current;
      if (!el) {
        setInsideSection(false);
        return;
      }

      // getBoundingClientRect gives position relative to viewport
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Simple rule:
      // If the bottom of the section is <= viewportHeight (i.e. viewport bottom
      // has entered or passed the section), we treat the button as "inside"
      const bottomReached = rect.bottom <= viewportHeight;
      setInsideSection(bottomReached);
    }

    // run once and on scroll/resize
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:px-12 bg-white  py-5"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: text + icons */}
          <div className="flex items-center gap-4">
            <span
              className="text-lg font-semibold text-black
            "
            >
              Follow Microsoft
            </span>

            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#000]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.53V9.22c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.86h2.74l-.44 2.9h-2.3V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#000]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.924a8.31 8.31 0 01-2.357.646 4.12 4.12 0 001.805-2.27 8.224 8.224 0 01-2.605.996A4.107 4.107 0 0016.616 4c-2.27 0-4.106 1.84-4.106 4.107 0 .322.036.636.106.936C8.91 9.02 5.63 7.2 3.53 4.42a4.106 4.106 0 00-.556 2.065c0 1.426.726 2.683 1.83 3.419a4.093 4.093 0 01-1.86-.51v.05c0 1.99 1.416 3.646 3.293 4.02-.345.094-.708.144-1.081.144-.265 0-.522-.026-.773-.074.522 1.626 2.035 2.81 3.828 2.843A8.233 8.233 0 012 19.54a11.62 11.62 0 006.29 1.843c7.548 0 11.67-6.256 11.67-11.674 0-.178-.004-.355-.012-.53A8.348 8.348 0 0022 5.924z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#000]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.564c0-1.327-.027-3.036-1.851-3.036-1.851 0-2.135 1.447-2.135 2.942v5.658H9.353V9h3.413v1.561h.049c.476-.9 1.636-1.85 3.368-1.85 3.602 0 4.268 2.371 4.268 5.455v6.286zM5.337 7.433a2.066 2.066 0 11.001-4.133 2.066 2.066 0 010 4.133zM6.963 20.452H3.712V9h3.25v11.452z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button. */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={
            insideSection
              ? "absolute right-6 bottom-2 lg:bottom-6 z-10 bg-gray-700/70 hover:bg-gray-600/90 font-semibold text-black rounded w-35 h-12 shadow flex items-center justify-center"
              : "fixed right-6 bottom-2 lg:bottom-6 z-50 bg-gray-700/70 hover:bg-gray-600/90 font-semibold text-black rounded w-35 h-12 shadow flex items-center justify-center"
          }
        >
          Back to top
          <svg
            className="w-5 h-5 "
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M4 12l6-6 6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </section>
  );
}
