import { Box } from "@chakra-ui/react";

interface Props {
  offsetX: number;
  offsetY: number;
  birdImage: string;
  threatColor: string;
}

const CompassThreatNear = ({
  offsetX,
  offsetY,
  birdImage,
  threatColor,
}: Props) => {
  if (Math.abs(offsetX) > 40 || Math.abs(offsetY) > 40) return null;

  // A litle math so the offset aligns with the compass drawing.
  const finalOffsetX = 180 + Math.sign(offsetX) * 20 + offsetX * 2.2;
  const finalOffsetY = 180 + Math.sign(offsetY) * 20 + offsetY * 2.2;

  return (
    <Box
      position="absolute"
      transformOrigin="center"
      transitionProperty="all"
      transitionDuration="1s"
      transitionTimingFunction={"ease"}
      width="40px"
      height="40px"
      transform={"translate(" + finalOffsetX + "px, " + finalOffsetY + "px)"}
    >
      <svg id="svg1" viewBox="0 0 48 48">
        <defs>
          <clipPath id="circleView">
            <circle
              cx="24"
              cy="24"
              r="19"
              fill="none"
              stroke={threatColor}
              strokeWidth="0"
            />
          </clipPath>
        </defs>
        <image
          x="0"
          y="0"
          width="48"
          height="48"
          xlinkHref={birdImage}
          clipPath="url(#circleView)"
        />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke={threatColor}
          strokeWidth="2"
        ></circle>
      </svg>
    </Box>
  );
};

export default CompassThreatNear;
