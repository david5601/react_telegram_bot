import React, { useState } from 'react'
import bnbIcon from "../../assets/images/Binance.webp"
import "./WithDraw.css"
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectAccountId, selectBNBValue } from '../../selectors/accountSelectors'
import BigNumber from 'bignumber.js';

const BinanceWithdraw = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const accountID = useSelector(selectAccountId);
  const bnbValue = useSelector(selectBNBValue);
  const [amount, setAmount] = useState(0)
  const [address, setAddress] = useState('')
  const [errorContent, setErrorContent] = useState("");

  const handleWithdrawClick = () => {
    if (amount < 0.024) {
      console.log(amount)
      setIsVisible(true);
      setErrorContent("Minimum withdraw balanace is 0.024");
      return;
    }
    if (new BigNumber(bnbValue).gt(new BigNumber("999999999"))) {
      if (amount < 0.024 || address == '') {
        if (amount < 0.024 || address == "") {
          setIsVisible(true);
          setErrorContent("Please input your wallet Address");
          return;
        }
      }
      const request = {
        id: accountID,
        amount: new BigNumber(amount).multipliedBy(new BigNumber('1000000000')).toString(),
        address,
        is_bnb: true
      }
      
      axios.post(`${process.env.REACT_APP_BACKEND_API}/withdraw`, request).then((res) => {
        if (res.data.success === true) {
          console.log("object")

        }
      }).catch(error => {

      }).finally(

      )

    } else {
      //implement here 
      setIsVisible(true);
      setErrorContent("Your balance is not sufficient");
      return;
    }
  }

  const showModal = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div>
        <h1 style={{ marginBottom: "5px" }}>Withdraw</h1>
        <p style={{ fontSize: "13px", margin: "0px" }}>This amount will be sent to the Binance Coin compatible wallet address</p>
      </div>
      <div className='coin-withdraw-amount'>
        <img src={bnbIcon} style={{ width: "35px" }}></img>
        <input id='coin_amount' placeholder='0' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} autoComplete="off"></input>
        <p style={{ paddingLeft: "10px", paddingRight: "20px" }}>BNB</p>
      </div>
      <div className='coin-withdraw-address'>
        <input id='wallet_address' type='text' placeholder='Your BNB Adress' value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="off"></input>
      </div>
      <div className='coin-withdraw-button'>
        <button className='btn3d btn-primary' onClick={handleWithdrawClick}>Withdraws</button>
      </div>
      <div className='warning-alert' style={{display: isVisible ? 'block' : 'none'}}>
          {errorContent}
      </div>
    </>
  )
}

export default BinanceWithdraw;
