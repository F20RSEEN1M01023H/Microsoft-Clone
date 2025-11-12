import React from "react";

const Btn = ({ cta }) => {
  return (
    <div>
      <a
        href="#"
        className="inline-block px-5 py-3 bg-[#0067b8] text-white rounded-md font-medium shadow-sm hover:bg-[#005a9e]"
      >
        {cta}
      </a>
    </div>
  );
};

export default Btn;
