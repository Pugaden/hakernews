import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = "- welcome to React...";
    const user = {
      name:"Den",
      secondName:"Pugachov",
    };
    return (
      <div className="App">
        <header className="App-header">
          <h2>{user.name} {user.secondName} {helloWorld}</h2>
        </header>
      </div>
    );
  }
}

export default App;
