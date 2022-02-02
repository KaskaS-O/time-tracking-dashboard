const UserCard = (props) => {
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
      <div className="intro__menu menu">
        <span className="menu__stats" id="day">
          Daily
        </span>
        <span className="menu__stats" id="week">
          Weekly
        </span>
        <span className="menu__stats" id="month">
          Monthly
        </span>
      </div>
    </div>
  );
};

export default UserCard;
