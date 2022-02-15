const StatsSelect = (props) => {
  return (
    <span
      className={props.active ? "menu__stats active" : "menu__stats"}
      id={props.id}
      onClick={props.click}
    >
      {props.txt}
    </span>
  );
};

export default StatsSelect;
