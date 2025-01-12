import {
  Heading,
  VStack,
  Container,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { colourSystem, typographySystem } from "../theme";
import { Link as DOMLink, useLocation } from "react-router-dom";

interface Link {
  displayText: string;
  icon: IconType;
  id: string;
  to: string;
}
interface Props {
  heading: string;
  activeNavItem?: string;
  links: Link[];
}

const LinkTree = ({ heading, links, activeNavItem }: Props) => {
  const { pathname } = useLocation();

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
          let className = "link" + (link.id === pathname ? "-active" : "");
          return (
            <Container
              key={link.displayText}
              className={className}
              width="100%"
            >
              <DOMLink to={link.to}>
                <HStack height={10}>
                  <Icon
                    fontSize={typographySystem.size_3}
                    as={link.icon}
                    color={colourSystem.Text.secondary}
                  />

                  <Text fontSize={typographySystem.size_2}>
                    {link.displayText}
                  </Text>
                </HStack>
              </DOMLink>
            </Container>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default LinkTree;
