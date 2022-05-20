import React, { Component } from "react";
import template1 from "../Components/img/1.png"; // import the img
import template2 from "../Components/img/2.png";
import template3 from "../Components/img/3.png";
import template4 from "../Components/img/4.png";
import template5 from "../Components/img/5.png";
import template6 from "../Components/img/6.png";

class Parent extends Component {
  currentPlayer = 0; // the play turn

  NewGame = () => {}; // start a new game

  RoleDice = (e) => {
    // pick 1 a random num 1-6
    this.setState({
      randomNumber1: (this.state.randomNumber1 = Math.floor(
        Math.random() * 6 + 1
      )),
      randomNumber2: (this.state.randomNumber2 = Math.floor(
        Math.random() * 6 + 1
      )),
    });
    this.state.playersData[this.currentPlayer].counter += //counter = random 1 + random 2
      this.state.randomNumber1 + this.state.randomNumber2;
  };

  HandleHold = (e) => {
    this.state.playersData[this.currentPlayer].totalScore += // total += counter => add the current to total
      this.state.playersData[this.currentPlayer].counter;

    this.state.playersData[this.currentPlayer].counter = 0; // counter =0

    this.setState({
      playersData: this.state.playersData, // set the new data (counter = 0 && new total) to playersData (array of obj)
    });
    if (
      this.state.playersData[this.currentPlayer].totalScore ==
      this.state.targetScore
    ) {
      this.state.playersData[this.currentPlayer].text = "W I N N E R";
    } else if (
      this.state.playersData[this.currentPlayer].totalScore >
      this.state.targetScore
    ) {
      this.state.playersData[this.currentPlayer].text = "L O S E";
    }
    this.setState({
      playersData: this.state.playersData, // set the win/ lose word in player data
    });
    switch (
      this.currentPlayer // switch turn
    ) {
      case 1: {
        this.currentPlayer = 0;
        break;
      }
      case 0: {
        this.currentPlayer = 1;
        break;
      }
    }
  };
  // submit the target value => default = 100
  handleSubmit = (e) => {
    e.preventDefault();
  };
  //change the text input to new target value
  handleSelectChange = (e) => {
    this.setState((prevState) => {
      return { targetScore: e.target.value };
    });
  };

  state = {
    targetScore: 100,
    randomNumber1: 0,
    randomNumber2: 0,
    playersData: [
      { counter: 0, text: "plyer 1", totalScore: 0 },
      { counter: 0, text: "plyer 2", totalScore: 0 },
    ],
    img: [template1, template2, template3, template4, template5, template6],
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="player1">
            <h1>{this.state.playersData[0].text}</h1>
            <h1> {this.state.playersData[0].totalScore} </h1>
            <div className="counter">
              current: {this.state.playersData[0].counter}
            </div>
          </div>
          <div className="mid">
            <button className="newGame" onClick={this.NewGame}>
              N E W - G A M E
            </button>
            <img src={this.state.img[this.state.randomNumber1 - 1]}></img>
            <img src={this.state.img[this.state.randomNumber2 - 1]}></img>
            <button onClick={this.RoleDice}>role dice</button>
            <button onClick={this.HandleHold}>hold</button>
            <form id={Math.random()} onSubmit={this.handleSubmit}>
              <input
                placeholder="default target is 100"
                type="text"
                onChange={this.handleSelectChange}
              />
              <button>Submit</button>
            </form>
          </div>

          <div className="player2">
            <h1>{this.state.playersData[1].text}</h1>
            <h1> {this.state.playersData[1].totalScore} </h1>
            <div className="counter">
              current: {this.state.playersData[1].counter}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Parent;
