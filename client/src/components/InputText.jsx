import React from "react";

export default function InputText({ name, value, placeholder, type, onChange, error, success }) {
  return (
    <div className=" w-full h-[42px] md:h-[51px] px-[12px] md:px-[33px] py-[4px] md:py-[11px] bg-[#F5F5F5] rounded-[1px] outline-none border-none  items-center gap-2.5 flex justify-between focus-within:outline-[#606485] focus-within:outline-1">
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="text-base md:text-xl border-none bg-[#F5F5F5]  text-[#606485] w-full focus-visible:outline-none"
      />
      <div className="w-6 h-6 px-0.5 py-[5.25px] justify-center items-center flex">
        {success && (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="signs" clipPath="url(#clip0_874_2186)">
              <path
                id="Vector 7"
                d="M21.9897 5.70797L8.47994 19.2178L2.02109 12.7589"
                stroke="#89A450"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_874_2186">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.00537109 0.462891)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
        {error && (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="signs">
              <path
                id="Vector 8"
                d="M18.5151 5.46285L5.00533 18.9727"
                stroke="#A45050"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 9"
                d="M5.00537 5.46285L18.5152 18.9727"
                stroke="#A45050"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
