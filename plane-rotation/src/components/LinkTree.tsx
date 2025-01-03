import {
  Heading,
  Link,
  VStack,
  Container,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { colourSystem, typographySystem } from "../theme";

interface Link {
  displayText: string;
  icon: IconType;
  isActive: boolean;
}
interface Props {
  heading: string;
  links: Link[];
}

const LinkTree = ({ heading, links }: Props) => {
  return (
    <VStack
      width="100%"
      paddingLeft="3"
      paddingBottom="3"
      alignItems="flex-start"
    >
      <Heading fontSize={typographySystem.size_3} paddingBottom="1">
        {heading}
      </Heading>
      <VStack width="100%" alignItems="flex-start" gap="0.25rem">
        {links.map((link) => {
          let className = "link" + (link.isActive ? "-active" : "");
          return (
            <Container
              key={link.displayText}
              className={className}
              width="100%"
            >
              <HStack height={10}>
                <Icon
                  fontSize={typographySystem.size_3}
                  as={link.icon}
                  color={colourSystem.Text.secondary}
                />
                <Link fontSize={typographySystem.size_2}>
                  {link.displayText}
                </Link>
              </HStack>
            </Container>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default LinkTree;
