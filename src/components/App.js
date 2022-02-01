import React, { Component } from "react";
import UserCard from "./UserCard";
import StatsCard from "./StatsCard";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <UserCard />
        <StatsCard />
      </>
    );
  }
}

export default App;
