import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ClassList from "../ClassList/ClassList";
import NavBar from "../../components/NavBar/NavBar/NavBar";
import ClassDetails from "../ClassDetails/ClassDetails";
import MonsterList from "../MonsterList/MonsterList";
import MonsterDetails from "../MonsterDetails/MonsterDetails";
import SpellSearch from "../SpellSearch/SpellSearch";

class App extends Component {
  state = {
    navItems: [
      { url: "/class-list", name: "Class List" },
      { url: "/monster-list", name: "Scary Monsters" },
      { url: "/spell-search", name: "Search for Spells" },
    ],
  };
  render() {
    return (
      <>
        <NavBar navItems={this.state.navItems} />
        <Route exact path="/class-list" render={() => <ClassList />} />
        <Route
          exact
          path="/class"
          render={({ location }) => <ClassDetails location={location} />}
        />
        <Route exact path="/monster-list" render={() => <MonsterList />} />
        <Route
          exact
          path="/monster"
          render={({ location }) => <MonsterDetails location={location} />}
        />
        <Route exact path="/spell-search" render={() => <SpellSearch />} />

      </>
    );
  }
}

export default App;
