import {
  Box,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { colourSystem, fontWeightSystem, typographySystem } from "../theme";
import { ElementType } from "react";

export interface MathInputType {
  icon?: ElementType;
  unit?: string;
  placeholder: string;
  heading: string;
}

const MathInput = ({ icon, unit, heading, placeholder }: MathInputType) => {
  return (
    <VStack>
      <Box width="100%">
        <Heading
          fontSize={typographySystem.size_2}
          fontWeight={fontWeightSystem.SemiBold}
          color={colourSystem.Text.dark}
          paddingBottom={2}
        >
          {heading}
        </Heading>
        <InputGroup>
          <InputLeftElement
            fontSize={typographySystem.size_2}
            pointerEvents="none"
          >
            {icon && (
              <Icon
                as={icon}
                fontSize={typographySystem.size_5}
                color="gray.500"
              />
            )}
          </InputLeftElement>

          <Input
            type="number"
            fontSize={typographySystem.size_2}
            placeholder={placeholder}
            color={colourSystem.Text.dark}
            fontWeight={fontWeightSystem.SemiBold}
          />
          {unit && (
            <InputRightElement
              fontSize={typographySystem.size_2}
              fontWeight={fontWeightSystem.SemiBold}
              color={colourSystem.Text.dark}
            >
              {unit}
            </InputRightElement>
          )}
        </InputGroup>
      </Box>
    </VStack>
  );
};

export default MathInput;
