import React, {useState, useEffect} from 'react'
import TronMiningInfo from './TronMiningInfo'
import tronIcon from "../../assets/images/tron-front.webp"
import coinMining from "../../assets/images/coin-mining.png"
import videoTron from "../../assets/images/miner-2.mp4"
import axios from 'axios'
import "./TronMining.css"

const TronMining = () => {
    const [trxValue, setTrxValue] = useState(0);
    const [trxSpeed, setTrxSpeed] = useState(50);
    const [trxEarningSpeed, setTrxEarningSpeed] = useState(0)

    useEffect(() => {
        // axios.post('backendapi').then((res) => {
        //     setTrxSpeed(res.message.th_speed)
        // }).catch(error => {

        // }).finally(

        // )
        setInterval(() => {
            setTrxValue(prev => prev + trxSpeed)
        }, 1000);
      return () => {
      }
    }, [])
    
  return (
    <>
        <div className='tron-mining-state'>
            <div style={{display:"flex", alignItems: "center", flexDirection: "column"}}>
                <div className='tron-value'>
                    <img src={tronIcon} style={{maxHeight:"55px"}}></img>
                    <p style={{fontSize: "25px", fontWeight: "700", padding: "0px", margin: "0px"}}>{trxValue.toFixed(8)} TRX</p>
                </div>
                <p style={{fontSize: "14px", padding: "0px", margin: "0px"}}>⚡ {trxSpeed.toFixed(2)}TH/s</p>
                
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
        <TronMiningInfo/>
    </>
  )
}

export default TronMining;
