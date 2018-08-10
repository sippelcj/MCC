import React, { Component } from 'react';
import helpers from './helpers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      counter: 0,
      increment: 0.05
    };
    // TODO refactor to avoid bind
    this.tick = this.tick.bind(this);
    this.onTextBlur = this.onTextBlur.bind(this);
    this.start = this.start.bind(this);
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    this.setState((prevState) => {
      return { counter: Math.round((prevState.counter + prevState.increment) * 10000) / 10000 }
    });
  }

  onTextBlur = (e) => {
    const amount = parseInt(e.target.value, 10);
    this.setState( {increment: helpers.getDollarPerMS(amount) } );
  }

  start = () => {
    let timer = setInterval(this.tick, 100);
    this.setState({timer});
  }

  stop = () => {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">$$$ Cost</h1>
        </header>
        <p className="App-intro">
          <input
            onBlur = {this.onTextBlur}
            type="text"
          >
          </input>
          <button
            onClick = {this.start}
            > submit
          </button>
          <br/>
          <br/>
          <span className='counter'> ${this.state.counter} </span>
          <br/>
          <button
            onClick = {this.stop}
            > stop
          </button>
        </p>
      </div>
    );
  }
}

export default App;
