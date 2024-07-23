import React from 'react'
import {Link} from "react-router-dom"
import "./Wallets.css"
// import "bootstrap/dist/css/bootstrap.css"
import binanceIcon from "../../assets/images/Binance.webp"
const BNBWithdrawButton = (props) => {
  return (
    <>
        <div className='button-group-withdraw-bnb'>
            <div style={{display:"flex", alignItems: "center"}}>
                <img src={binanceIcon} style={{maxHeight:"55px"}}></img>
                <div>
                    <p style={{fontSize: "14px", padding: "0px", margin: "0px"}}>BNB Balance:</p>
                    <p style={{fontSize: "19px", fontWeight: "700", padding: "0px", margin: "0px"}}>5.0352 BNB</p>
                </div>
                
            </div>
            <div style={{paddingTop: "17px", display: "flex"}}>
                <Link to='/binance_withdraw'>
                    <button type='button' className='btn-primary btn3d'>
                        Withdraw
                    </button>
                </Link>
                
            </div>
        </div>
      
    </>
  )
}

export default BNBWithdrawButton;
