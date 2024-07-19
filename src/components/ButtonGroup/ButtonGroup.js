import React from 'react'
import "./ButtonGroup.css"

const ButtonGroup = (props) => {
    return (
      <>
        <div className='button-group'>
          <div>
            <h2 style={{marginBottom: "0px", minWidth: "215px", fontWeight: "500",fontSize: "1.4em"}}>{props.name}</h2>
            <h5 style={{marginTop: "0px", fontWeight: "350"}}>Start mining</h5>
          </div>
          <img src={props.src}></img>
        </div>
      </>
    )
}

export default ButtonGroup;
