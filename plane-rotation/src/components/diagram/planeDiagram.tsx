import { Box } from "@chakra-ui/react";
import Plot from "react-plotly.js";
import { Data, PlotData } from "plotly.js";
import { Plane } from "./plane";
import { useContext } from "react";
import BirdContext from "../state-management/context/birdContext";
import PlaneContext from "../state-management/context/planeContext";
import { Bird } from "../state-management/reducers/birdReducer";
import { colourSystem } from "../../theme";
import ShowCsContext from "../state-management/context/showCSSystem";

const marbleCS_Length = 2;
const marbleCS_Thickness = 4;

/*
const threats: Data[] = [
  // X-Axis
  {
    opacity: 1,
    type: "scatter3d",
    x: [-4],
    y: [-4],
    z: [5],
    mode: "markers",
    text: ["Bitches"],
    hovertemplate: "<b>%{text}</b><extra></extra><br>(%{x},%{y},%{z})",
    showlegend: false,
    showscale: false,
    marker: {
      color: "rgb(207, 13, 13)",
      size: 6,
      symbol: "circle",
      opacity: 1,
    },
  },
];
*/

interface Props {
  tmp: number;
  viewPortHeight: number;
  viewPortWidth: number;
}

interface ViewCube {
  x: number[];
  y: number[];
  z: number[];
}

function calculateViewBoxCube(plane: Plane, birds: Bird[]): ViewCube {
  // Calculate the distance to all birds.
  let distances = birds.map((bird) => [
    plane.getHorizontalDistance2Plane(bird.location),
    plane.getVerticalDistance2Plane(bird.location),
  ]);

  // get largest distance
  let ViewPortDistance = Math.ceil(
    distances.reduce((acc, curr) => {
      let m = Math.max(...curr);
      return m > acc ? m : acc;
    }, 0)
  );

  // ViewPortWidth is set to min 10m and otherwise to the furthest threat.
  ViewPortDistance = Math.max(
    ViewPortDistance,
    6,
    plane.getDistanceFromGround()
  );

  return {
    x: [
      plane.translationVector[0] - ViewPortDistance,
      plane.translationVector[0] + ViewPortDistance,
    ],
    y: [
      plane.translationVector[1] - ViewPortDistance,
      plane.translationVector[1] + ViewPortDistance,
    ],
    z: [0, 2 * ViewPortDistance],
  };
}

function getCoordinateSystem(plane: Plane, show: boolean): Partial<PlotData>[] {
  if (show) {
    return [
      {
        type: "scatter3d",
        mode: "lines",
        x: plane.marbleCS_X[0],
        y: plane.marbleCS_X[1],
        z: plane.marbleCS_X[2],
        hovertemplate: "<extra></extra>",
        line: {
          width: marbleCS_Thickness,
          color: "#A31400",
        },
      },
      {
        type: "scatter3d",
        mode: "lines",
        x: plane.marbleCS_Y[0],
        y: plane.marbleCS_Y[1],
        z: plane.marbleCS_Y[2],
        hovertemplate: "<extra></extra>",
        line: {
          width: marbleCS_Thickness,
          color: "#255181",
        },
      },
      {
        type: "scatter3d",
        mode: "lines",
        x: plane.marbleCS_Z[0],
        y: plane.marbleCS_Z[1],
        z: plane.marbleCS_Z[2],
        hovertemplate: "<extra></extra>",
        line: {
          width: marbleCS_Thickness,
          color: "#9DBB58",
        },
      },
    ];
  }
  return [];
}

/* tslint:disable */
// @ts-nocheck
const PlaneDiagram = ({ tmp, viewPortWidth, viewPortHeight }: Props) => {
  const { birdsWithErrors, dispatch: dispatchBird } = useContext(BirdContext);
  const { birds } = birdsWithErrors;
  const { planeWithErrors, dispatch: dispatchPlane } = useContext(PlaneContext);
  const { plane } = planeWithErrors;

  const { toggle: showCSToggle, dispatch: dispatchshowCSToggle } =
    useContext(ShowCsContext);

  const planeCoordinates = plane.coordinates;

  const threats: Partial<PlotData>[] = birds.map((bird) => {
    return {
      opacity: 1,
      type: "scatter3d",
      x: [bird.location.x],
      y: [bird.location.y],
      z: [bird.location.z],
      mode: "markers",
      text: [bird.name],
      hovertemplate: "<b>%{text}</b><extra></extra><br>(%{x},%{y},%{z})",
      marker: {
        color: bird.color,
        size: 6,
        symbol: "circle",
        opacity: 1,
      },
    };
  });
  console.log(threats);

  const {
    x: viewCubeX,
    y: viewCubeY,
    z: viewCubeZ,
  } = calculateViewBoxCube(plane, birds);
  return (
    <Box width={viewPortWidth + "px"} height={viewPortHeight + "px"}>
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
            opacity: 0.3,
            hovertemplate: "<extra></extra>",
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
            hovertemplate:
              '<b>"Pilots" Head</b><extra></extra><br>(%{x},%{y},%{z})',
            showlegend: false,
            hoveron: "points",
            showscale: false,
            marker: {
              color: "rgb(230, 18, 117)",
              size: 6,
              symbol: "circle",
              opacity: 0.8,
            },
          },

          ...getCoordinateSystem(plane, showCSToggle),

          {
            type: "scatter3d",
            mode: "lines",
            x: plane.foldLinesX,
            y: plane.foldLinesY,
            z: plane.foldLinesZ,
            hovertemplate: "<extra></extra>",
            line: {
              width: marbleCS_Thickness,
              color: "#83C0DD",
            },
          },

          // **************************
          // North
          // **************************
          {
            type: "scatter3d",
            mode: "lines",
            x: [0, 4, 3.5, 4, 3.5],
            y: [0, 0, -0.5, 0, 0.5],
            z: [0, 0, 0, 0, 0],
            hovertemplate: "<extra></extra>",
            line: {
              width: marbleCS_Thickness + 2,
              color: colourSystem.Text.secondary,
            },
          },
          {
            type: "scatter3d",
            mode: "lines",
            x: [4.5, 5.5, 4.5, 5.5],
            y: [-0.3, -0.3, -1, -1],
            z: [0, 0, 0, 0],
            hovertemplate: "<extra></extra>",
            line: {
              width: marbleCS_Thickness,
              color: colourSystem.Text.secondary,
            },
          },
          // **************************
          // East
          // **************************
          {
            type: "scatter3d",
            mode: "lines",
            x: [0, 0, -0.5, 0, 0.5],
            y: [0, -4, -3.5, -4, -3.5],
            z: [0, 0, 0, 0, 0],
            hovertemplate: "<extra></extra>",
            line: {
              width: marbleCS_Thickness + 2,
              color: colourSystem.Text.secondary,
            },
          },
          {
            type: "scatter3d",
            mode: "lines",
            x: [1.5, 1.5, 1, 1, 1, 0.5, 0.5],
            y: [-5, -4.5, -4.5, -5, -4.5, -4.5, -5],
            z: [0, 0, 0, 0, 0, 0, 0],
            hovertemplate: "<extra></extra>",
            line: {
              width: marbleCS_Thickness,
              color: colourSystem.Text.secondary,
            },
          },

          // **************************
          // THREATS
          ...threats,
        ]}
        layout={{
          /*
           * Styling Axes:
           * https://plotly.com/javascript/axes/
           */
          autosize: false,
          width: viewPortWidth,
          height: viewPortHeight,
          margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 0,
          },
          hovermode: "closest",
          showlegend: false,
          scene: {
            aspectmode: "manual",
            aspectratio: {
              x: 1,
              y: 1,
              z: 1,
            },
            xaxis: {
              nticks: 10,
              range: viewCubeX,
            },
            yaxis: {
              nticks: 10,
              range: viewCubeY,
            },
            zaxis: {
              nticks: 10,
              range: viewCubeZ,
            },
          },
        }}
      />
    </Box>
  );
};

export default PlaneDiagram;
