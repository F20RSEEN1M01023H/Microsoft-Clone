import React from "react";
import Btn from "./Btn";

export default function SectionThree({ hero3, cta, desc, title }) {
  return (
    <section className="w-full py-6 lg:py-10 px-2 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* ---------- MOBILE / TABLET: show image first, then content below ---------- */}
        <div className="lg:hidden w-full">
          {/* Mobile image row */}
          <div
            className="w-full h-56 sm:h-72  bg-cover"
            style={{ backgroundImage: `url(${hero3})` }}
            role="img"
            aria-label="Hero image"
          />
          {/* Content box below image (visible on mobile) */}
          <div className="w-full bg-white px-2 lg:px-6 py-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                {title}
              </h2>
              <p className=" mb-6">{desc}</p>
              <Btn cta={cta} />
            </div>
          </div>
        </div>
        {/* ---------- DESKTOP: background image with right-side content (desktop only) ---------- */}
        <div
          className="hidden lg:block w-full h-[90vh] bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${hero3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero image (desktop)"
        >
          {/* Content box on the right (desktop only) */}
          <div className="relative z-10 h-full ">
            <div className="max-w-7xl ">
              <div className="grid grid-cols-12 h-screen items-center">
                {/* left empty columns push content to right */}
                <div className="col-span-6" />

                {/* right column with content, vertically centered */}
                <div className="col-span-5 p-8 bg-white  text-black font-normal ">
                  <div className="">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                      {title}
                    </h2>
                    <p className=" mb-6 max-w-md">{desc}</p>
                    <Btn cta={cta} />
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
