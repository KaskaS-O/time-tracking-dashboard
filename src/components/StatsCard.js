import imgDots from "../images/icon-ellipsis.svg";

const StatsCard = (props) => {
  return (
    <div className="card stats">
      <div className="stats__bar">
        <img src={props.icon} alt="" aria-hidden="true" />
      </div>
      <div className="stats__data data">
        <h3 className="data__title">{props.title}</h3>
        <span className="data__numbers big">
          {props.timeframes.weekly.current}hrs
        </span>
        <div className="data__more">
          <img src={imgDots} alt="" />
        </div>
        <span className="data__last-period">
          Last Week - {props.timeframes.weekly.previous}
        </span>
        {/* Uwzglednic zmiany daily/weekly/montly */}
      </div>
    </div>
  );
};

export default StatsCard;
