import {
  Card,
  Text,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Alert,
  AlertIcon,
  Stack,
} from "@chakra-ui/react";
import illustration from "../assets/YawPitchRollIllustration.svg";

const Impressum = () => {
  return (
    <Card marginY={5} align="center" height="90%">
      <CardHeader>
        <Heading size="md">Privacy policy</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={1}>
          GORUCK 415 Pablo Ave N. Suite 140 Jacksonville Beach, FL 32250
          <Text marginBottom={5}>
            Build by Ivo for the univerity course DLMCSPSE-240.Copyright © by
            Ivo Prahm.
          </Text>
          <Text>Ivo Prahm</Text>
          <Text>Musterstrasse 1,</Text>
          <Text>64283 Darmstadt</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Impressum;
