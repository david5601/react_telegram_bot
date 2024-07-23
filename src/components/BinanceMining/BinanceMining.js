import React from 'react'
import bnbIcon from "../../assets/images/bnb-front.webp"
import coinMining from "../../assets/images/coin-mining.png"
import videoTron from "../../assets/images/miner-2.mp4"
import BinanceMiningInfo from './BinanceMiningInfo'
import "./BinanceMining.css"

const BinanceMining = () => {
  return (
    <>
        <div className='bnb-mining-state'>
            <div style={{display:"flex", alignItems: "center", flexDirection: "column"}}>
                <div className='bnb-value'>
                    <img src={bnbIcon} style={{maxHeight:"40px", paddingRight: "10px"}}></img>
                    <p style={{fontSize: "25px", fontWeight: "700", padding: "0px", margin: "0px"}}>5.03522525 BNB</p>
                </div>
                <p style={{fontSize: "14px", padding: "0px", margin: "0px"}}>⚡ 150.00TH/s</p>
                
            </div>
            <div style={{paddingTop: "10px", display: "flex"}}>
                <button type='button' className='btn-danger btn3d boost-claim-btn'>
                    Claim
                </button>
                <button type='button' className='btn-primary btn3d boost-claim-btn'>
                    Boost &nbsp;<p style={{margin: "0px", fontSize: "20px"}}>🚀</p>
                </button>
            </div>
        </div>
        <div>
            {/* <img src={coinMining} style={{width: "100%"}}></img> */}
            <video autoPlay controls loop>
                <source src={videoTron} type="video/mp4"/>
            </video>
        </div>
        <BinanceMiningInfo/>
    </>
  )
}

export default BinanceMining;