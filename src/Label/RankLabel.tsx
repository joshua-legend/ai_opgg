export type RankLabelProps = {
  rank: number;
};

const RankLabel = (props: RankLabelProps) => {
  return (
    <span style={{ color: "#9aa4af", fontSize: "12px", flex: "1" }}>
      {props.rank}
    </span>
  );
};

export default RankLabel;
