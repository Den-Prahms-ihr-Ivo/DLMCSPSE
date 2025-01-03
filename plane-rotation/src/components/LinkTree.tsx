import {
  Heading,
  Link,
  VStack,
  Container,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

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
      paddingLeft="4"
      paddingBottom="6"
      alignItems="flex-start"
    >
      <Heading fontWeight="bold" paddingBottom="2.5" as="h2" size="md">
        {heading}
      </Heading>
      <VStack width="100%" alignItems="flex-start">
        {links.map((link) => {
          let className = "link" + (link.isActive ? "-active" : "");
          return (
            <Container className={className} width="100%">
              <HStack height={10}>
                <Icon as={link.icon} />
                <Link>{link.displayText}</Link>
              </HStack>
            </Container>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default LinkTree;
