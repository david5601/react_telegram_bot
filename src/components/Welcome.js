import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
        <>
            <div>
                <h2>Hi, {this.props.name}!</h2>
            </div>
            <div>
                <h1 style={{paddingBottom: "40px"}}>Select the currency you want to mine</h1>
            </div>
        </>
    );
  }
}

export default Welcome;