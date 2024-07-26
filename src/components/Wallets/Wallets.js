import React, { useEffect, useState } from "react";
import TronWithdrawButton from "./TronWithdrawButton";
import BNBWithdrawButton from "./BNBWithdrawButton";
import WalletTransactionHistory from "./WalletTransactionHistory";
import { useSelector, useDispatch } from 'react-redux'
import { selectAccountId } from '../../selectors/accountSelectors'
import axios from 'axios'
import BigNumber from "bignumber.js";
import "./Wallets.css";
import { setBNBRatio, setTHSpeed, setTrxRatio, setTrxValue } from "../../actions/accountActions";
import LstestOperations from "../Friends/LstestOperations";
const Wallets = () => {
  const dispatch = useDispatch();
  const [tronBalance, setTronBalance] = useState(0);
  const [bnbBalance, setBNBBalance] = useState(0);
  const [allChanged, setAllChanged] = useState(false);

  const [transactionHistory, setTransactionHistory] = useState([]);
  const accountID = useSelector(selectAccountId);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_BACKEND_API}/trx/${accountID}`).then((res) => {
      if (res.data.success === true) {
        dispatch(setTrxRatio(res.data.message.ratio));
        dispatch(setTrxValue(res.data.message.balance));

        setTronBalance(res.data.message.balance);
        setAllChanged(true);
      }
    }).catch(error => {

    }).finally(

    )
    axios.get(`${process.env.REACT_APP_BACKEND_API}/bnb/${accountID}`).then((res) => {
      if (res.data.success === true) {
        dispatch(setTHSpeed(res.data.message.thSpeed));
        dispatch(setBNBRatio(res.data.message.ratio));
        dispatch(setBNBBalance(res.data.message.balance));

        setBNBBalance(res.data.message.balance);
        setAllChanged(true);
      }
    }).catch(error => {

    }).finally(

    )
    axios.get(`${process.env.REACT_APP_BACKEND_API}/transaction/${accountID}`).then((res) => {
      console.log(res.data.message)

    }).catch(error => {

    }).finally(

    )
    axios.get(`${process.env.REACT_APP_BACKEND_API}/transaction/${accountID}`).then((res) => {
      if (res.data.success === true) {
        console.log("object")
        setTransactionHistory(res.data.message)
      }
    }).catch(error => {

    }).finally(

    )
  }, [accountID])


  return (
    <>
      <div className="wallet-section">
        <div className="container">
          <div className="wallet-section__inner">
            <TronWithdrawButton tronBalance={new BigNumber(tronBalance).div(new BigNumber("1000000000")).toFixed(4)} />
            <BNBWithdrawButton bnbBalance={new BigNumber(bnbBalance).div(new BigNumber("1000000000")).toFixed(4)} />
            {/* <WalletTransactionHistory transactionHistory={transactionHistory} /> */}
            <LstestOperations lstestOperations={transactionHistory} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Wallets;
