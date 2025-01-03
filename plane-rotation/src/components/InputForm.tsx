import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import MathInput, { MathInputType } from "./MathInput";
import { colourSystem, typographySystem } from "../theme";

interface Props {
  inputs: MathInputType[];
}

const InputForm = ({ inputs }: Props) => {
  return (
    <VStack paddingY={4}>
      <Box width="100%">
        <Heading fontSize={typographySystem.size_5} paddingBottom={2}>
          Popo
        </Heading>
      </Box>

      <HStack spacing={4} width="100%" justifyContent="space-between">
        {inputs.map((input) => (
          <MathInput
            key={input.heading}
            unit={input.unit}
            heading={input.heading}
            icon={input.icon}
            placeholder={input.placeholder}
          />
        ))}
      </HStack>
      <Box width="100%">
        <Text
          fontSize={typographySystem.size_1}
          color={colourSystem.Text.secondary}
        >
          Rotate the plane along its internal axes. New rotations are added to
          the current roatation.{" "}
        </Text>
      </Box>
    </VStack>
  );
};

export default InputForm;
