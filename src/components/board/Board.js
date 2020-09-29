import React, { Component } from 'react';
import Slot from '../slot/Slot';
import './board.css';
import GameManager from '../../services/GameManager';


class Board extends Component
{
  constructor(props)
  {
    super();
    this.manager = new GameManager();
    this.slotRefs = Array.from({length: 9}, (_, i) => React.createRef())
  }

  getCallBack(input)
  {
    console.log(this.manager.currentPlayer.token);
    return () => {
      console.log('clicked');
      const valid = this.manager.writeMove(input);
      console.log(valid);
      console.log(this.manager.currentPlayer.token);
      if(valid)
      {
        this.slotRefs[input].current.changeToken(this.manager.currentPlayer.token);
        this.manager.togglePlayer();
      }
    };
  }

  render()
  {
    return (
      <div className="card">
        <div className="card-header">Tictactoe</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4" onClick={this.getCallBack(0)}><Slot defaultToken={' '} ref={this.slotRefs[0]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(1)}><Slot defaultToken={' '} ref={this.slotRefs[1]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(2)}><Slot defaultToken={' '} ref={this.slotRefs[2]}/></div>
          </div>
          <div className="row">
            <div className="col-md-4" onClick={this.getCallBack(3)}><Slot defaultToken={' '} ref={this.slotRefs[3]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(4)}><Slot defaultToken={' '} ref={this.slotRefs[4]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(5)}><Slot defaultToken={' '} ref={this.slotRefs[5]}/></div>
          </div>
          <div className="row">
            <div className="col-md-4" onClick={this.getCallBack(6)}><Slot defaultToken={' '} ref={this.slotRefs[6]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(7)}><Slot defaultToken={' '} ref={this.slotRefs[7]}/></div>
            <div className="col-md-4" onClick={this.getCallBack(8)}><Slot defaultToken={' '} ref={this.slotRefs[8]}/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
