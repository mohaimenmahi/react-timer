import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.ticker = this.ticker.bind(this);
    this.startButton = this.startButton.bind(this);
    this.stopButton = this.stopButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.state = {
      clock: 0
    };
  };
  ticker() {
    this.setState((prevState) => {
      clock: prevState.clock + 1
    });
  };
  startButton() {
    this.timer = setInterval(this.ticker, 1000);
  }
  stopButton() {
    this.setState((prevState) => {
      return {
        clock: prevState.clock
      };
    });
    clearInterval(this.timer);
  };
  resetButton() {
    this.setState({clock: 0});
    clearInterval(this.timer);
  };
  render(){
    return(
      <div>
        <p>You have been in this site since: </p> <br />
        <span>{this.state.clock}</span>
        <p>Seconds</p>
        <button onClick={this.startButton}>Start</button>
        <button onClick={this.stopButton}>Stop</button>
        <button onClick={this.resetButton}>Reset</button>
      </div>
    );
  }
}

export default Timer;
