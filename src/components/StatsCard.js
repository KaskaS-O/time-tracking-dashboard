import imgDots from "../images/icon-ellipsis.svg";
import imgDotsWhite from "../images/icon-ellipsis-white.svg";
import "../scss/_variables.scss";

const StatsCard = (props) => {
  const id = `${props.title.replace(" ", "-").toLowerCase()}`;
  const iconSource = props.icon;

  return (
    <div className="card stats">
      <div
        className="stats__bar"
        id={id}
        style={{ backgroundImage: `url(${iconSource})` }}
      ></div>
      <div className="stats__data data">
        <h3 className="data__title">{props.title}</h3>
        <span className="data__numbers big">
          {props.timeframes.weekly.current}hrs
        </span>

        <span className="data__last-period">
          Last Week - {props.timeframes.weekly.previous}hrs
        </span>
        {/* Uwzglednic zmiany daily/weekly/montly */}
      </div>
      <div className="data__more">
        <img className="data__more--normal" src={imgDots} alt="dots" />
        <img className="data__more--white" src={imgDotsWhite} alt="dots" />
      </div>
    </div>
  );
};

export default StatsCard;
