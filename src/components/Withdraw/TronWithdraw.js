import React from 'react'
import tronIcon from "../../assets/images/tron.webp"
import "./WithDraw.css"

const TronWithdraw = (props) => {
  return (
    <>
      <div>
        <h1 style={{marginBottom: "5px"}}>Withdraw</h1>
        <p style={{fontSize: "13px", margin: "0px"}}>This amount will be sent to the TRON compatible wallet address</p>
      </div>
      <div className='coin-withdraw-amount'>
        <img src={tronIcon} style={{width: "35px"}}></img>
        <input id='coin_amount' type='text' placeholder='0'></input>
        <p style={{paddingLeft: "10px", paddingRight: "20px"}}>TRX</p>
      </div>
      <div className='coin-withdraw-address'>
        <input id='wallet_address' type='text' placeholder='Your TRX Adress'></input>
      </div>
      <div className='coin-withdraw-button'>
        <button className='btn3d btn-primary'>Withdraws</button>
      </div>
    </>
  )
}

export default TronWithdraw;