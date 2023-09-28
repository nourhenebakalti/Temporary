import * as React from "react";
const FooterLogo1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={156}
    height={28}
    fill="none"
    {...props}
  >
    <g opacity={0.42}>
      <path fill="url(#a)" d="M.841 4.13H51.43v23.287H.841z" />
      <path fill="url(#b)" d="M105.276.77h50.188v16.06h-50.188z" />
    </g>
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00794 .01724)" />
      </pattern>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#d" transform="scale(.008 .025)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={126}
        height={58}
      />
      <image
        xlinkHref="data:image/png;base64,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"
        id="d"
        width={125}
        height={40}
      />
    </defs>
  </svg>
);
export default FooterLogo1;