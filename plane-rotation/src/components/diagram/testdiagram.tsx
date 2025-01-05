import { Box } from "@chakra-ui/react";
import Plot from "react-plotly.js";
import { Data } from "plotly.js";
import { Plane } from "./plane";
import { useEffect } from "react";

const marbleCS_Length = 2;
const marbleCS_Thickness = 4;

const coordinateSystem: Data[] = [
  // X-Axis
  {
    type: "scatter3d",
    mode: "lines",
    x: [0, marbleCS_Length, marbleCS_Length - 0.2],
    y: [0, 0, 0.2],
    z: [-1.3, -1.3, -1.3],
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

interface Props {
  plane: Plane;
  tmp: number;
}

const TestPlot = ({ plane, tmp }: Props) => {
  const planeCoordinates = plane.coordinates;

  return (
    <Box width="500px" height="400px">
      <Plot
        id="Bitches"
        data={[
          // PLANE
          planeCoordinates,
          // SHAODW
          {
            type: "mesh3d",
            //@ts-expect-error
            color: "#cacaca",
            opacity: 0.5,
            x: planeCoordinates.x,
            y: planeCoordinates.y,
            z: [0, 0, 0, 0, 0, 0],
            i: new Float64Array([0, 3, 2, 4]),
            j: new Float64Array([1, 1, 1, 1]),
            k: new Float64Array([2, 4, 5, 5]),
          },
          // MARBLE
          {
            opacity: 1,
            type: "scatter3d",
            x: [plane.marbleX],
            y: [plane.marbleY],
            z: [plane.marbleZ],
            mode: "markers",
            marker: {
              color: "rgb(230, 18, 117)",
              size: 6,
              symbol: "circle",
              opacity: 0.8,
            },
          },
          {
            type: "scatter3d",
            mode: "lines",
            x: plane.marbleCS_X[0],
            y: plane.marbleCS_X[1],
            z: plane.marbleCS_X[2],
            line: {
              width: marbleCS_Thickness,
              color: "red",
            },
          },
          {
            type: "scatter3d",
            mode: "lines",
            x: plane.marbleCS_Y[0],
            y: plane.marbleCS_Y[1],
            z: plane.marbleCS_Y[2],
            line: {
              width: marbleCS_Thickness,
              color: "blue",
            },
          },
          {
            type: "scatter3d",
            mode: "lines",
            x: plane.marbleCS_Z[0],
            y: plane.marbleCS_Z[1],
            z: plane.marbleCS_Z[2],
            line: {
              width: marbleCS_Thickness,
              color: "green",
            },
          },
          // SHADOW
        ]}
        layout={{
          /*
           * Styling Axes:
           * https://plotly.com/javascript/axes/
           */
          autosize: false,
          width: 500,
          height: 400,
          margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 0,
          },
          hovermode: false,
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
              range: [0, 10],
            },
          },
        }}
      />
    </Box>
  );
};

export default TestPlot;
