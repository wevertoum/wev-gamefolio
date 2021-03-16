import React from "react";

function InstagramIcon({ size = 50 }) {
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
        fill="#030404"
        fillRule="nonzero"
        d="M493 337h-4v2h-2v4h2v2h4v-2h2v-4h-2v-2z"
        transform="translate(-1970.83 -1331.48) scale(4.16667) translate(0 -3.444)"
      ></path>
      <path
        fill="#030404"
        fillRule="nonzero"
        d="M502 333h-4v-4h4v4zm-3 4v8h-2v2h-2v2h-8v-2h-2v-2h-2v-8h2v-2h2v-2h8v2h2v2h2zm8-12v-2h-2v-2h-28v2h-2v2h-2v28h2v2h2v2h28v-2h2v-2h2v-28h-2z"
        transform="translate(-1970.83 -1331.48) scale(4.16667) translate(0 -1.444)"
      ></path>
    </svg>
  );
}

export default React.memo(InstagramIcon);
