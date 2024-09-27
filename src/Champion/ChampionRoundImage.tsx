export type ChampionRoundImageProps = {
  championRoundImage: string;
};

const ChampionRoundImage = (props: ChampionRoundImageProps) => {
  return (
    <div style={{ width: "24px", height: "24px" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "9999px",
        }}
        src={props.championRoundImage}
        alt=""
      />
    </div>
  );
};

export default ChampionRoundImage;
