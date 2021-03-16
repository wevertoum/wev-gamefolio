import React from "react";

function LinkedinIcon({ size = 50 }) {
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
        d="M227 432v8h-4v-6h-4v6h-4v-12h4v2h6v2h2zm-14-6h-4v-4h4v4zm0 2v12h-4v-12h4zm21-11v-2h-2v-2h-28v2h-2v2h-2v28h2v2h2v2h28v-2h2v-2h2v-28h-2z"
        transform="translate(-782.764 -1331.48) scale(4.16667) translate(-12.137 -93.444)"
      ></path>
    </svg>
  );
}

export default React.memo(LinkedinIcon);
