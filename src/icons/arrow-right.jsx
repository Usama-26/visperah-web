import React from "react";

export default function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
