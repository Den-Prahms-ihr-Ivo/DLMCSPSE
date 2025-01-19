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
import PlaneDiagram from "../components/diagram/planeDiagram";
import { useContext } from "react";
import RedrawContext from "../components/state-management/context/redrawContext";

const GraphDetail = () => {
  const { trigger: redrawTrigger, dispatch: dispatchRedraw } =
    useContext(RedrawContext);

  return (
    <Card marginY={5} align="center">
      <CardHeader marginTop={5}>
        <Heading size="md">Detail View of the Scene</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={5}>
          <PlaneDiagram
            tmp={redrawTrigger}
            viewPortWidth={1000}
            viewPortHeight={600}
          />
          <Alert status="info">
            <AlertIcon />
            This page will be fully implemented in Version 2.0! :)
          </Alert>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GraphDetail;
