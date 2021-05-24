import React from "react";

function TwitterIcon({ size = 50, fill = "#030404" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 150 150"
      height={size}
      width={size}
    >
      <path
        fill={fill}
        fillRule="nonzero"
        d="M411 339h-4v2h-2v2h-2v2h-2v2h-12v-4h4v-2h-2v-6h-2v-4h4v2h2v2h2v2h2v-4h2v-2h4v2h2v2h4v4zm5-14v-2h-2v-2h-28v2h-2v2h-2v28h2v2h2v2h28v-2h2v-2h2v-28h-2z"
        transform="translate(-1591.67 -1331.48) scale(4.16667) translate(0 -1.444)"
      ></path>
    </svg>
  );
}

export default React.memo(TwitterIcon);
