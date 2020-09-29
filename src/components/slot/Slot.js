import React, { Component } from 'react';
import './slot.css';


class Slot extends Component
{
  constructor(props)
  {
    super();
    this.defaultToken = props.defaultToken;
    this.input = props.input;
    this.state = {
      token: this.defaultToken,
    }
  }

  changeToken(newToken)
  {
    this.setState({token: newToken});
  }

  render()
  {
    return (
      <div className="card">
        <div className="card-body">{ this.state.token }</div>
      </div>
    )
  }
}

export default Slot;
