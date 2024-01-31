import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isActive: false
  };

  handleShow = () => {
    this.setState({isActive: true});
  };

  handleHide = () => {
    this.setState({isActive: false});
  };

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
          {this.state.isActive ? <h1 data-test-id="monkey">Hello React</h1> : null }
          </header>
        </div>
      )
  }
}

export default App;