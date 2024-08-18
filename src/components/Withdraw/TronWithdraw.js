import React, { useState } from "react";
import tronIcon from "../../assets/images/tron.webp";
import { useSelector } from "react-redux";
import {
  selectAccountId,
  selectTrxValue,
} from "../../selectors/accountSelectors";
import "./WithDraw.css";
import BigNumber from "bignumber.js";
import axios from "axios";
const TronWithdraw = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const accountID = useSelector(selectAccountId);
  const trxValue = useSelector(selectTrxValue);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [successContent, setSuccessContent] = useState("");
  const handleWithdrawClick = () => {
    if (amount < 100) {
      setIsVisible(true);
      setErrorContent("Minimum withdraw balanace is 100");
      console.log("ssssssssssss")
      return;
    }
    if (new BigNumber(trxValue).gt(new BigNumber("999999999"))) {
      if (amount < 100 || address == "") {
        setIsVisible(true);
        setErrorContent("Please input your wallet Address");
        return;
      }
      setIsVisible(false);
      const request = {
        id: accountID,
        amount: new BigNumber(amount)
          .multipliedBy(new BigNumber("1000000000"))
          .toString(),
        address,
        is_bnb: false,
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_API}/withdraw`, request)
        .then((res) => {
          if (res.data.success === true) {
            console.log("tron: object");
            // console.log("object")
            setIsSuccess(true)
            setSuccessContent("Successfully! Please wait for checking the contract.")
            return;
          }
        })
        .catch((error) => {
          console.log("tron: object error");
        })
        .finally();
    } else {
      //implement here
      setIsVisible(true);
      setErrorContent("Your balance is not sufficient");
      return;
    }
  };

  return (
    <>
      <div>
        <h1 style={{ marginBottom: "5px" }}>Withdraw</h1>
        <p style={{ fontSize: "13px", margin: "0px" }}>
          This amount will be sent to the TRON compatible wallet address
        </p>
      </div>
      <div className="coin-withdraw-amount">
        <img src={tronIcon} style={{ width: "35px" }}></img>
        <input
          id="coin_amount"
          placeholder="0"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          autoComplete="off"
        ></input>
        <p style={{ paddingLeft: "10px", paddingRight: "20px" }}>TRX</p>
      </div>
      <div className="coin-withdraw-address">
        <input
          id="wallet_address"
          type="text"
          placeholder="Your TRX Adress"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="off"
        ></input>
      </div>
      <div className="coin-withdraw-button">
        <button className="btn3d btn-primary" onClick={handleWithdrawClick}>
          Withdraws
        </button>
      </div>

      <div
        className="warning-alert"
        style={{ display: isVisible ? "block" : "none" }}
      >
        {errorContent}
      </div>
      <div className='primary-alert' style={{display: isSuccess ? "block" : "none"}}>
          {successContent}
      </div>
    </>
  );
};

export default TronWithdraw;
