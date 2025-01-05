import { Box, Center, Text, VStack } from "@chakra-ui/react";
import CompassBG from "./CompassBG";
import CompassTriangle from "./CompassTriangle";
import CompassThreatFar from "./CompassThreatFar";
import CompassShadow from "./CompassShadow";
import CompassThreatNear from "./CompassThreatNear";

import crow from "../../assets/birds/crow.webp";
import { colourSystem, fontWeightSystem, typographySystem } from "../../theme";
// "#f64851"
// #39C656
// #0686FF

const Compass = () => {
  return (
    <Box padding={4} position="relative" width="400px" height="400px">
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
      <Box position="absolute" zIndex="999" right="0px" bottom="10px">
        <Center>
          <VStack gap={0}>
            <Text
              fontSize={typographySystem.size_6}
              fontWeight={fontWeightSystem.SemiBold}
              color={colourSystem.Accent.accent_1}
            >
              40.7m
            </Text>
            <Text
              fontSize={typographySystem.size_2}
              fontWeight={fontWeightSystem.SemiBold}
              color={colourSystem.Text.dark}
            >
              to Crow
            </Text>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Compass;
