import React from "react";

const VidIcon = (className) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_427)">
        <circle cx="33.3652" cy="26.3652" r="21.3652" fill="#4977E5" />
      </g>
      <path
        d="M39.3753 27.5887C39.3142 27.6515 39.0833 27.9198 38.8683 28.1405C37.6078 29.5286 34.3193 31.8006 32.5982 32.4942C32.3368 32.6056 31.6759 32.8414 31.3228 32.8566C30.9845 32.8566 30.662 32.7787 30.3542 32.6207C29.9706 32.4 29.6628 32.0527 29.4942 31.6427C29.3856 31.3581 29.217 30.5067 29.217 30.4915C29.0483 29.56 28.9556 28.0464 28.9556 26.3737C28.9556 24.78 29.0483 23.3281 29.1864 22.3825C29.2022 22.3674 29.3708 21.3092 29.5553 20.9468C29.8936 20.2847 30.5545 19.8735 31.2617 19.8735H31.3228C31.7834 19.8898 32.752 20.3009 32.752 20.316C34.3804 21.0106 37.593 23.1712 38.8841 24.6069C38.8841 24.6069 39.2478 24.9759 39.4058 25.2063C39.6525 25.5374 39.7748 25.9474 39.7748 26.3575C39.7748 26.8151 39.6367 27.2414 39.3753 27.5887Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1_427"
          x="0"
          y="0"
          width="66.7303"
          height="66.7305"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.286275 0 0 0 0 0.466667 0 0 0 0 0.898039 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_427"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_427"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VidIcon;
