// src/components/SectionTwo.jsx
import React from "react";
import Btn from "./Btn";

export default function SectionTwo({ cards = [] }) {
  return (
    <section className="w-full bg-white py-10 lg:py-18">
      <div className="container mx-auto px-2 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {cards.map((c, idx) => (
            <article
              key={idx}
              className="bg-[#ffff] rounded shadow-lg overflow-hidden flex flex-col "
            >
              {/* image area */}
              <div className="h-44 sm:h-48 lg:h-34 w-full overflow-hidden bg-gray-100">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{c.desc}</p>

                <div className="pt-2 lg:mx-auto">
                  <Btn cta={c.ctaText} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
