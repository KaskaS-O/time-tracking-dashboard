import imgDots from "../images/icon-ellipsis.svg";
import imgDotsWhite from "../images/icon-ellipsis-white.svg";
import "../scss/_variables.scss";

const StatsCard = (props) => {
  const id = `${props.title.replace(" ", "-").toLowerCase()}`;
  const iconSource = props.icon;
  const { timeframes, activeStatsPeriod } = props;

  let currentNumbers = "";
  let previousPeriodNumbers = "";

  if (activeStatsPeriod === "day") {
    currentNumbers = timeframes.daily.current;
    previousPeriodNumbers = timeframes.daily.previous;
  } else if (activeStatsPeriod === "week") {
    currentNumbers = timeframes.weekly.current;
    previousPeriodNumbers = timeframes.weekly.previous;
  } else if (activeStatsPeriod === "month") {
    currentNumbers = timeframes.monthly.current;
    previousPeriodNumbers = timeframes.monthly.previous;
  }

  return (
    <div className="card stats">
      <div
        className="stats__bar"
        id={id}
        style={{ backgroundImage: `url(${iconSource})` }}
      ></div>
      <div className="stats__data data">
        <h3 className="data__title">{props.title}</h3>
        <span className="data__numbers big">{currentNumbers}hrs</span>

        <span className="data__last-period">
          Last Week - {previousPeriodNumbers}hrs
        </span>
      </div>
      <div className="data__more">
        <img className="data__more--normal" src={imgDots} alt="dots" />
        <img className="data__more--white" src={imgDotsWhite} alt="dots" />
      </div>
    </div>
  );
};

export default StatsCard;
