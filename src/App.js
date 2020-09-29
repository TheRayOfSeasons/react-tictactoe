import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/board/Board';
import './App.css';


class App extends Component
{
  render()
  {
    return (
      <div className="col-md-6 d-flex justify-content-around">
        <Board />
      </div>
    );
  }
}

export default App;
