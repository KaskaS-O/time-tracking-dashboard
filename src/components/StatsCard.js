import imgDots from "../images/icon-ellipsis.svg";
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
        <div className="data__more">
          <img src={imgDots} alt="" />
        </div>
        <span className="data__last-period">
          Last Week - {props.timeframes.weekly.previous}hrs
        </span>
        {/* Uwzglednic zmiany daily/weekly/montly */}
      </div>
    </div>
  );
};

export default StatsCard;
