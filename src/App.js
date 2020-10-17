import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Display from "./Components/Display";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App mt-2">
          <Route path="/" exact component={Home} />
          <Route path="/display" component={Display} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
