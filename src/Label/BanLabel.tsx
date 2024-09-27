export type BanLabelProps = {
  banPercent: number;
};

const BanLabel = (props: BanLabelProps) => {
  return (
    <span
      style={{
        color: "#57646F",
        fontSize: "12px",
        flex: "3",
        textAlign: "center",
      }}
    >
      {props.banPercent} %
    </span>
  );
};
export default BanLabel;
