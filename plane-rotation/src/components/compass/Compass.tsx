import { Box } from "@chakra-ui/react";
import CompassBG from "./CompassBG";
import CompassTriangle from "./CompassTriangle";
import CompassThreatFar from "./CompassThreatFar";
import CompassShadow from "./CompassShadow";
import CompassThreatNear from "./CompassThreatNear";

import crow from "../../assets/birds/crow.webp";
// "#f64851"
// #39C656
// #0686FF

const Compass = () => {
  return (
    <Box position="relative" width="400px" height="400px">
      <CompassShadow />
      <CompassBG degree={0} />
      <CompassTriangle />
      <CompassThreatFar degree={0} threatColor="#0686FF" />
      <CompassThreatNear
        offsetX={40}
        offsetY={0}
        threatColor="#0686FF"
        birdImage={crow}
      />
    </Box>
  );
};

export default Compass;
