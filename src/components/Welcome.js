import React, { Component } from 'react'
import "../App.css"

class Welcome extends Component {
  render() {
    return (
        <>
            <div>
                <h2 className='title'>Hi, {this.props.name}!</h2>
            </div>
            <div>
                <h1 style={{paddingBottom: "10px", fontWeight:"600", fontSize:"1.9em"}}>Select the currency you want to mine</h1>
            </div>
        </>
    );
  }
}

export default Welcome;