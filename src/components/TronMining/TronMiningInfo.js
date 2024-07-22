import React from 'react'
import tronIcon from "../../assets/images/tron-front.webp"
import battleIcon from "../../assets/images/icon_battlepass.png"
const TronMiningInfo = (props) => {
  return (
    <>
        <div className='mining-info-bar'>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={tronIcon} style={{height: "85%", paddingLeft: "12px"}}></img>
                <div>
                    <p style={{margin: "0px", fontSize: "13px"}}>Earning per day:</p>
                    <p style={{margin: "0px", fontSize: "14px"}}>2.41 RTX</p>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div style={{display: "flex", alignItems: "center", marginLeft: "20px"}}>
                <img src={battleIcon} style={{height: "85%", paddingLeft: "12px"}}></img>
                <div style={{marginLeft: "10px"}}>
                    <p style={{margin: "0px", fontSize: "13px"}}>Level</p>
                    <p style={{margin: "0px", fontSize: "14px"}}>Free</p>
                </div>
            </div>
        </div>
        {/* <div style={{backgroundColor: "#3f2e5b", position: "absolute"}}>
            coming soon
        </div> */}
    </>
  )
}

export default TronMiningInfo;
