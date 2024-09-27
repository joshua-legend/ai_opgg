export type ChampionImageProps = {
  championImage: string;
};

const ChampionImage = (props: ChampionImageProps) => {
  return (
    <div style={{ width: "32px", height: "32px", flex: "1" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "4px",
        }}
        src={props.championImage}
        alt=""
      />
    </div>
  );
};
export default ChampionImage;
