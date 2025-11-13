// src/components/Footer.jsx
import React from "react";

export default function Footer({ bottomLinks = [], footerCols = [] }) {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Top columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Bottom area: 2 cols */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                <svg
                  className="w-5 h-5 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12h20M12 2c2.5 3.5 2.5 10 0 15M12 2c-2.5 3.5-2.5 10 0 15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="ml-2 flex flex-wrap">
                <div className="text-sm py-1 font-medium text-gray-700">
                  English (Pakistan)
                </div>
                <div className="text-sm py-1 ml-2 text-gray-500">
                  Your privacy choices
                </div>
                <div className="text-sm py-1 ml-2 text-gray-500">
                  Consumer Health Privacy
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap items-center gap-4">
              {bottomLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
