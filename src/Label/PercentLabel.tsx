export type PercentLabelProps = {
  percent: number;
};

const PercentLabel = (props: PercentLabelProps) => {
  return (
    <span style={{ color: "#57646F", fontSize: "12px", textAlign: "center" }}>
      {props.percent} %
    </span>
  );
};

export default PercentLabel;
