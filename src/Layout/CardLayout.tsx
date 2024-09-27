import Card from "../Card/Card";
import { championRankingList } from "../data";

const CardLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",

          width: "100%",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {championRankingList.map((v, i) => (
          <Card
            rank={v.positionTierData.rank}
            elevation={v.positionTierData.rank_prev}
            championImage={v.image_url}
            championName={v.name}
            tier={v.positionTier}
            position={v.positionName}
            winPercent={Math.round(v.positionWinRate * 100)}
            pickPercent={Math.round(v.positionPickRate * 100)}
            banPercent={Math.round(v.positionBanRate * 100)}
            ChampionRoundImages={v.positionCounters.map((counter) => ({
              championRoundImage: counter.img_url,
            }))}
          />
        ))}
      </section>
    </main>
  );
};

export default CardLayout;
