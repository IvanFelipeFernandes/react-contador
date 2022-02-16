import './App.css';
import React, { Component } from "react";

class App extends Component {
  state = {
    numero: 0
  };

  add = () => {
    this.setState({
      numero: this.state.numero < 10 ? this.state.numero + 1 : 10
    });
  };

  remove = () => {
    this.setState({
      numero: this.state.numero > 0 ? this.state.numero - 1 : 0
    });
  };
  clear = () => {
    this.setState({
      numero: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.numero}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;
