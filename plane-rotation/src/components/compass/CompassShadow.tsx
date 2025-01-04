import { Box } from "@chakra-ui/react";

const CompassShadow = () => {
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
        <g transform="matrix(5.50247,0,0,5.50247,-13796.1,-10261.4)">
          <g transform="matrix(3.13606,0,0,3.13606,-5740.99,-4362.43)">
            <clipPath id="_clip1">
              <rect x="2630.13" y="1985.71" width="118.822" height="120.114" />
            </clipPath>
            <g clipPath="url(#_clip1)">
              <circle
                cx="2693.17"
                cy="2054.65"
                r="64.687"
                style={{ fill: "url(#_Radial2)" }}
              />
            </g>
          </g>
        </g>
        <g transform="matrix(5.50247,0,0,5.50247,-13796.1,-10261.4)">
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
        <defs>
          <radialGradient
            id="_Radial2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(39.0787,39.0787,-39.0787,39.0787,2693.17,2053.91)"
          >
            <stop
              offset="0"
              style={{ stopColor: "rgb(211,228,252)", stopOpacity: 1 }}
            />
            <stop
              offset="1"
              style={{ stopColor: "rgb(92,160,255)", stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default CompassShadow;
