import { Box } from "@chakra-ui/react";

interface Props {
  degree: number;
}

const CompassThreatFar = ({ degree }: Props) => {
  return (
    <Box
      position="absolute"
      transformOrigin="center"
      transform={"rotate(" + degree + "deg)"}
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
          <g transform="matrix(-1,-5.55112e-17,5.55112e-17,-1,5282.94,3790.43)">
            <path
              d="M2589.37,1902.16L2601.07,1925.56L2577.66,1925.56L2589.37,1902.16Z"
              style={{ fill: "rgb(246,72,81)" }}
            />
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
      </svg>
    </Box>
  );
};

export default CompassThreatFar;
