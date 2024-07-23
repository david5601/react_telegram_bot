import React from 'react'
import bnbIcon from "../../assets/images/Binance.webp"
import "./WithDraw.css"

const BinanceWithdraw = (props) => {
  return (
    <>
      <div>
        <h1 style={{marginBottom: "5px"}}>Withdraw</h1>
        <p style={{fontSize: "13px", margin: "0px"}}>This amount will be sent to the Binance Coin compatible wallet address</p>
      </div>
      <div className='coin-withdraw-amount'>
        <img src={bnbIcon} style={{width: "35px"}}></img>
        <input id='coin_amount' type='text' placeholder='0'></input>
        <p style={{paddingLeft: "10px", paddingRight: "20px"}}>BNB</p>
      </div>
      <div className='coin-withdraw-address'>
        <input id='wallet_address' type='text' placeholder='Your BNB Adress'></input>
      </div>
      <div className='coin-withdraw-button'>
        <button className='btn3d btn-primary'>Withdraws</button>
      </div>
    </>
  )
}

export default BinanceWithdraw;
