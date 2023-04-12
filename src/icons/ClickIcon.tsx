import React from "react";

function ClickIcon({ size = 50, fill = "#bd1cff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      width={"100%"}
      height={"100%"}
      clipRule="evenodd"
      viewBox="0 0 277 288"
    >
      <path
        fill={fill}
        d="M375.034 336.257v13.063h-18.253v14.739H193.69v-28.601h-16.063v-15.481h-16.213v-16.932H145.05v-33.273h-15.924v-30.78h-16.333v-34.185h16.462v-16.4h32.824v15.867h15.892v15.37h17.097V91.348h14.67V76.071h34.103v15.277h14.728v64.737h34.278v15.522h47.837v16.309h48.646v148.341h-14.296z"
        transform="translate(-112.793 -76.07)"
      ></path>
      <path
        fill="#fff"
        d="M146.167 237.404v31.88h15.924v32.908h16.363v16.632h16.213v15.462h16.064v14.739H340.23v-14.739h34.066V202.949h-19.032v33.019H340.23v-47.095h-33.612v31.271h-15.033v-46.732h-33.016v46.574h-15.034V93.25h-33.433v158.945h-15.034V236.39h-17.446v-15.37h-16.719v-15.867h-31.07v32.251h16.334z"
        transform="translate(-112.793 -76.07)"
      ></path>
    </svg>
  );
}

export default React.memo(ClickIcon);
