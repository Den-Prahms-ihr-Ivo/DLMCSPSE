import { Box } from "@chakra-ui/react";
import CompassBG from "./CompassBG";
import CompassTriangle from "./CompassTriangle";
import CompassThreatFar from "./CompassThreatFar";

const Compass = () => {
  return (
    <Box position="relative" width="400px" height="400px">
      <CompassBG degree={0} />
      <CompassTriangle />
      <CompassThreatFar degree={0} />
    </Box>
  );
};

export default Compass;
