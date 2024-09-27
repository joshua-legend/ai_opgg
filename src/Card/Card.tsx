import { CSSProperties } from "react";
import RankLabel, { RankLabelProps } from "../Label/RankLabel";
import Elevation, { ElevationProps } from "../Elevation/Elevation";
import ChampionImage, { ChampionImageProps } from "../Champion/ChampionImage";
import ChampionName, { ChampionNameProps } from "../Champion/ChampionName";
import Tier, { TierProps } from "../Tier/Tier";
import Position, { PositionProps } from "../Position/Position";
import ChampionRoundImage, {
  ChampionRoundImageProps,
} from "../Champion/ChampionRoundImage";
import BanLabel, { BanLabelProps } from "../Label/BanLabel";
import PickLabel, { PickLabelProps } from "../Label/PickLabel";
import WinLabel, { WinLabelProps } from "../Label/WinLabel";

type CardProps = RankLabelProps &
  ElevationProps &
  ChampionImageProps &
  ChampionNameProps &
  TierProps &
  PositionProps &
  WinLabelProps &
  PickLabelProps &
  BanLabelProps & {
    ChampionRoundImages: ChampionRoundImageProps[];
  };

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center",
    padding: "2px 5px",
    borderBottom: "1px solid #ebeef1",
  };

  return (
    <article style={cardStyle}>
      <RankLabel {...props} />
      <Elevation {...props} />
      <ChampionImage {...props} />
      <ChampionName {...props} />
      <Tier {...props} />
      <Position {...props} />
      <WinLabel {...props} />
      <PickLabel {...props} />
      <BanLabel {...props} />
      <section
        style={{ display: "flex", flexDirection: "row", gap: "1px", flex: "3" }}
      >
        {props.ChampionRoundImages.map((v, index) => (
          <ChampionRoundImage key={index} {...v} />
        ))}
      </section>
    </article>
  );
};

export default Card;
