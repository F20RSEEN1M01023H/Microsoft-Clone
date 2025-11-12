import React from "react";
import Btn from "./Btn";

export default function SectionOne({ hero1, hero2, bta, cta, desc, title }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl">
        {/* ---------- MOBILE / TABLET: show image first, then content below ---------- */}
        <div className="lg:hidden w-full">
          {/* Mobile image row */}
          <div
            className="w-full h-56 sm:h-72 md:h-120 bg-center bg-cover"
            style={{ backgroundImage: `url(${hero1})` }}
            role="img"
            aria-label="Hero image"
          />
          {/* Content box below image (visible on mobile) */}
          <div className="w-full bg-white px-6 py-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                {title}
              </h2>
              <p className=" mb-6">{desc}</p>
              <Btn cta={cta} />

              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  className="text-[#0067b8] inline-flex items-center gap-1 text-md font-semibold underline"
                >
                  {bta}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------- DESKTOP: background image with right-side content (desktop only) ---------- */}
        <div
          className="hidden lg:block w-full h-[90vh] bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${hero2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero image (desktop)"
        >
          {/* Content box on the right (desktop only) */}
          <div className="relative z-10 h-full">
            <div className="max-w-7xl mx-auto h-full">
              <div className="grid grid-cols-12 h-full">
                {/* left empty columns push content to right */}
                <div className="col-span-7" />

                {/* right column with content, vertically centered */}
                <div className="col-span-5 flex items-center text-black font-normal ">
                  <div className="p-8 lg:p-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                      {title}
                    </h2>
                    <p className=" mb-6 max-w-md">{desc}</p>
                    <Btn cta={cta} />

                    <div className="flex items-center gap-4 mt-3">
                      <a
                        href="#"
                        className="text-[#0067b8] inline-flex items-center gap-1 text-md font-semibold underline"
                      >
                        {bta}
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end desktop block */}
      </div>
    </section>
  );
}
