export type WinLabelProps = {
  winPercent: number;
};

const WinLabel = (props: WinLabelProps) => {
  return (
    <span
      style={{
        color: "#57646F",
        fontSize: "12px",
        flex: "3",
        textAlign: "center",
      }}
    >
      {props.winPercent} %
    </span>
  );
};
export default WinLabel;
