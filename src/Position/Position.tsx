export type PositionProps = {
  position: string;
};

const Position = (props: PositionProps) => {
  const positionMap: { [key: string]: string } = {
    TOP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
    JUNGLE:
      "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
    MID: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
    AD: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
    SUPPORT:
      "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
  };

  return (
    <div style={{ width: "30px", height: "30px", flex: "2" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={positionMap[props.position]}
        alt=""
      />
    </div>
  );
};
export default Position;
