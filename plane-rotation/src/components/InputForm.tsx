import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import MathInput, { MathInputType } from "./MathInput";
import { colourSystem, typographySystem } from "../theme";

interface Props {
  inputs: MathInputType[];
  superheading: string;
  description?: string;
}

const InputForm = ({ inputs, superheading, description }: Props) => {
  return (
    <VStack paddingY={4}>
      <Box width="100%">
        <Heading fontSize={typographySystem.size_5} paddingBottom={2}>
          {superheading}
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
      {description && (
        <Box width="100%">
          <Text
            fontSize={typographySystem.size_2}
            color={colourSystem.Text.secondary}
          >
            {description}
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default InputForm;
