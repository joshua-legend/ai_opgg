export type PickLabelProps = {
  pickPercent: number;
};

const PickLabel = (props: PickLabelProps) => {
  return (
    <span
      style={{
        color: "#57646F",
        fontSize: "12px",
        flex: "3",
        textAlign: "center",
      }}
    >
      {props.pickPercent} %
    </span>
  );
};
export default PickLabel;
