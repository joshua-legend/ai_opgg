import { CSSProperties } from "react";

export type ElevationProps = {
  elevation: number;
};

const Elevation = (props: ElevationProps) => {
  const elevationStyle: CSSProperties = {
    color: "#139020",
    fontSize: "12px",
    flex: "1",
  };

  return <span style={elevationStyle}>{props.elevation}</span>;
};

export default Elevation;
