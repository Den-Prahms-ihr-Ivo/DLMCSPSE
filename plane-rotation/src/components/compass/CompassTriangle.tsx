import { Box } from "@chakra-ui/react";

const CompassTriangle = () => {
  return (
    <Box
      position="absolute"
      transformOrigin="center"
      transitionProperty="all"
      transitionDuration="1s"
      transitionTimingFunction={"ease"}
      width="100%"
      height="100%"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2051 2073"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g transform="matrix(5.50289,0,0,5.50289,-13797.2,-10262.2)">
          <g transform="matrix(0.245709,0,0,0.38699,2302.16,1456.48)">
            <rect
              x="834.72"
              y="1055.32"
              width="1516.55"
              height="973.374"
              style={{ fill: "rgb(235,235,235)", fillOpacity: 0 }}
            />
          </g>
        </g>
        <g transform="matrix(5.50289,0,0,5.50289,-13797.2,-10262.2)">
          <g transform="matrix(-2.92028,-3.57632e-16,2.18315e-16,-1.78268,10724.8,5556.86)">
            <path
              d="M2750.16,1965.69L2803.87,2054.65L2696.45,2054.65L2750.16,1965.69Z"
              style={{ fill: "url(#_Linear1)" }}
            />
          </g>
        </g>
        <g transform="matrix(5.50289,0,0,5.50289,-13797.2,-10262.2)">
          <g transform="matrix(1,0,0,1,-2.7575,-3.05046)">
            <path
              d="M2696.33,2049.51L2706.45,2069.89L2686.21,2069.89L2696.33,2049.51Z"
              style={{ fill: "rgb(102,15,86)" }}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3.32539e-15,88.9639,-54.3077,5.44747e-15,2750.16,1965.69)"
          >
            <stop
              offset="0"
              style={{ stopColor: "rgb(174,44,104)", stopOpacity: "0.5" }}
            />
            <stop
              offset="0.53"
              style={{ stopColor: "rgb(158,100,214)", stopOpacity: 0.14 }}
            />
            <stop
              offset="1"
              style={{ stopColor: "rgb(152,121,255)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default CompassTriangle;
