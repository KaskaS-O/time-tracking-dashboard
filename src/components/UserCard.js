import StatsSelect from "./StatsSelect";

const UserCard = (props) => {
  const menu = props.statsPeriods.map((item) => (
    <StatsSelect
      key={item.title}
      txt={item.txt}
      id={item.title}
      click={props.click}
      active={item.title === props.activeStatsPeriod ? true : false}
    />
  ));

  return (
    <div className="card intro">
      <div className="intro__user-panel user">
        <div className="user__img">
          <img src={props.img} alt="user avatar" />
        </div>
        <h2 className="user__title">Report for</h2>
        <span className="user__name">
          {props.name} {props.surname}
        </span>
      </div>
      <div className="intro__menu menu">{menu}</div>
    </div>
  );
};

export default UserCard;
