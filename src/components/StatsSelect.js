const StatsSelect = (props) => {
  return (
    <span className="menu__stats" id={props.id} onClick={props.click}>
      {props.txt}
    </span>
  );
};

export default StatsSelect;
