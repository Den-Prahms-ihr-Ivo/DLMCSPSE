import { Box } from "@chakra-ui/react";
import Plot from "react-plotly.js";
import { Data } from "plotly.js";
import { Plane } from "./plane";
import { useState } from "react";

const marbleX = 0;
const marbleY = 0;
const marbleZ = -1.3;
const marbleCS_Length = 2;
const marbleCS_Thickness = 4;

const coordinateSystem: Data[] = [
  // X-Axis
  {
    type: "scatter3d",
    mode: "lines",
    x: [0, marbleCS_Length],
    y: [0, 0],
    z: [-1.3, -1.3],
    line: {
      width: marbleCS_Thickness,
      color: "red",
    },
  },
  {
    type: "scatter3d",
    mode: "lines",
    x: [0, 0],
    y: [0, marbleCS_Length],
    z: [-1.3, -1.3],
    line: {
      width: marbleCS_Thickness,
      color: "blue",
    },
  },
  {
    type: "scatter3d",
    mode: "lines",
    x: [0, 0],
    y: [0, 0],
    z: [-1.3, marbleCS_Length - 1.3],
    line: {
      width: marbleCS_Thickness,
      color: "green",
    },
  },
];

const TestPlot = () => {
  const [planeCoordinates, setCoordinates] = useState(new Plane().coordinates);

  return (
    <Box width="500px" height="400px">
      <Plot
        data={[
          // PLANE
          planeCoordinates,
          // MARBLE
          {
            opacity: 1,
            type: "scatter3d",
            x: [marbleX],
            y: [marbleY],
            z: [marbleZ],
            mode: "markers",
            marker: {
              color: "rgb(230, 18, 117)",
              size: 6,
              symbol: "circle",
              opacity: 0.8,
            },
          },
          // COORDINATE SYSTEM
          ...coordinateSystem,
        ]}
        layout={{
          /*
           * Styling Axes:
           * https://plotly.com/javascript/axes/
           */
          autosize: false,
          width: 500,
          height: 400,
          showlegend: false,
          scene: {
            aspectmode: "manual",
            aspectratio: {
              x: 1,
              y: 1,
              z: 1,
            },
            xaxis: {
              nticks: 9,
              range: [-5, 5],
            },
            yaxis: {
              nticks: 7,
              range: [-5, 5],
            },
            zaxis: {
              nticks: 10,
              range: [-5, 5],
            },
          },
        }}
      />
    </Box>
  );
};

export default TestPlot;
