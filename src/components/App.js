import React, { Component } from "react";
import UserCard from "./UserCard";
import StatsCard from "./StatsCard";

class App extends Component {
  state = {
    name: "",
    surname: "",
    img: "",
    stats: [],
  };

  componentDidMount() {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          surname: data.surname,
          img: data.img,
          stats: data.stats,
        });
      });
  }

  render() {
    const { name, surname, img } = this.state;
    const stats = this.state.stats.map((item) => (
      <StatsCard
        key={item.title}
        title={item.title}
        icon={item.icon}
        timeframes={item.timeframes}
      />
    ));
    return (
      <>
        <UserCard name={name} surname={surname} img={img} />
        {stats}
      </>
    );
  }
}

export default App;
