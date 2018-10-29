import React, { Component } from "react";
import BuildingCard from "./components/BuildingCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import buildings from "./buildings.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Set this.state
  state = {
    buildings,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  doClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.doScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reDo();
    }
  };

  doScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.doScramble();
  };

  reDo = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Give it another go..",
      clicked: []
    });
    this.doScramble();
  };

  doScramble = () => {
    let shuffledFriends = shuffleFriends(buildings);
    this.setState({ buildings: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Buildings Memory Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron />
        <Title>
          Try to click on each building at least once. To win click through each
          building card without double-clicking any one card! It's harder than
          you think!
        </Title>

        <Container>
          <Row>
            {this.state.buildings.map(building => (
              <Column size="12">
                <BuildingCard
                  key={building.id}
                  doClick={this.doClick}
                  doScore={this.doScore}
                  reDo={this.reDo}
                  doScramble={this.doScramble}
                  id={building.id}
                  image={building.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
