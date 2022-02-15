import React, { Component } from "react";
import UserCard from "./UserCard";
import StatsCard from "./StatsCard";

class App extends Component {
  state = {
    name: "",
    surname: "",
    img: "",
    stats: [],
    activeStatsPeriod: "week",
  };

  statsPeriods = [
    { title: "day", txt: "Daily" },
    { title: "week", txt: "Weekly" },
    { title: "month", txt: "Monthly" },
  ];

  handleStatsSelect = (event) => {
    const id = event.target.id;

    this.setState({
      activeStatsPeriod: id,
    });
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
    const { name, surname, img, activeStatsPeriod } = this.state;
    const stats = this.state.stats.map((item) => (
      <StatsCard
        key={item.title}
        title={item.title}
        icon={item.icon}
        timeframes={item.timeframes}
        activeStatsPeriod={activeStatsPeriod}
      />
    ));
    return (
      <>
        <UserCard
          name={name}
          surname={surname}
          img={img}
          statsPeriods={this.statsPeriods}
          activeStatsPeriod={activeStatsPeriod}
          click={this.handleStatsSelect}
        />
        {stats}
      </>
    );
  }
}

export default App;
