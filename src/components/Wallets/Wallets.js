import React, { useEffect, useState } from "react";
import TronWithdrawButton from "./TronWithdrawButton";
import BNBWithdrawButton from "./BNBWithdrawButton";
import WalletTransactionHistory from "./WalletTransactionHistory";
import "./Wallets.css";
const Wallets = () => {
  const [tronBalance, setTronBalance] = useState(0);
  const [bnbBalance, setBNBBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([
    {
      date: "2024-01-01\n03:34:22",
      icon: "tronIcon",
      trx: "100.0000",
      deposit: "Deposit",
      status: "Success",
    },
  ]);
  return (
    <>
      <div className="wallet-section">
        <div className="container">
          <div className="wallet-section__inner">
            <TronWithdrawButton tronBalance={tronBalance.toFixed(4)} />
            <BNBWithdrawButton bnbBalance={bnbBalance.toFixed(4)} />
            <WalletTransactionHistory transactionHistory={transactionHistory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallets;
