import React, { Component } from 'react'
import "./ButtonGroup.css"

class ButttonGroup extends Component {
  render() {
    return (
      <>
        <div className='button-group'>
          <div>
            <h2 style={{marginBottom: "0px", minWidth: "215px", fontWeight: "500",fontSize: "1.4em"}}>{this.props.name}</h2>
            <h5 style={{marginTop: "0px", fontWeight: "350"}}>Start mining</h5>
          </div>
          <img src={this.props.src}></img>
        </div>
      </>
    )
  }
}

export default ButttonGroup;
