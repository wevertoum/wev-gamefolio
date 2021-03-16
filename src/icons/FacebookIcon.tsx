import React from "react";

function FaceBookIcon({ size = 50 }) {
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
        d="M315 333h-4v3h4v4h-4v9h-4v-9h-4v-4h4v-5h2v-2h6v4zm10-8v-2h-2v-2h-28v2h-2v2h-2v28h2v2h2v2h28v-2h2v-2h2v-28h-2z"
        transform="translate(-1212.5 -1337.5) scale(4.16667)"
      ></path>
    </svg>
  );
}

export default React.memo(FaceBookIcon);
