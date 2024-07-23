import React from 'react'
import "./Wallets.css"
// import "bootstrap/dist/css/bootstrap.css"
import tronIcon from "../../assets/images/tron.webp"
import {Link} from "react-router-dom"
const TronWithdrawButton = (props) => {
  return (
    <>
        <div className='button-group-withdraw-tron'>
            <div style={{display:"flex", alignItems: "center"}}>
                <img src={tronIcon} style={{maxHeight:"55px"}}></img>
                <div>
                    <p style={{fontSize: "14px", padding: "0px", margin: "0px"}}>Tron Balance:</p>
                    <p style={{fontSize: "19px", fontWeight: "700", padding: "0px", margin: "0px"}}>{props.tronBalance} TRX</p>
                </div>
                
            </div>
            <div style={{paddingTop: "17px", display: "flex"}}>
                <Link to="/tron_withdraw">
                    <button type='button' className='btn-primary btn3d'>
                        Withdraw
                    </button>
                </Link>
            </div>
        </div>
      
    </>
  )
}

export default TronWithdrawButton;
