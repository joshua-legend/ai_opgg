export type ChampionNameProps = {
  championName: string;
};

const ChampionName = (props: ChampionNameProps) => {
  return (
    <span
      style={{
        color: "#202D37",
        fontSize: "12px",
        fontWeight: "bold",
        flex: "2",
      }}
    >
      {props.championName}
    </span>
  );
};

export default ChampionName;
