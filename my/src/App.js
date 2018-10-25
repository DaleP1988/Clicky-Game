import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BuildingCard from "./components/BuildingCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbtron";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import buildings from "./buildings.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    buildings
  };

  replaceBuilding = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const building = this.state.buildings.filter(
      building => building.id !== id
    );
    // Set this.state.friends equal to the new friends array
    //FIND A METHOD TO SWITCH RATHER THAN ELIMINTE
    this.setState({ buildings });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Router>
      <Navbar />
      <Jumbotron />
      <Wrapper
        <Title>City Buildings</Title>
        {this.state.buildings.map(building => (
          <BuildingCard
            replaceBuilding={this.replaceBuilding}
            id={building.id}
            image={building.image} 
            name={building.name}
            );
          />
      <Wrapper />
      <Footer />
      <Router/>
    );
        
 

export default App;
