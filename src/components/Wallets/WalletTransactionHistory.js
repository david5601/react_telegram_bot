import React from "react";
import "./Wallets.css";
import searchIcon from "../../assets/images/Vector-Search-PNG-Image.png";
import tronIcon from "../../assets/images/tron.webp"
import binanceIcon from "../../assets/images/Binance.webp"
let row = ["Date", "Coin", "Amount", "Type", "Status"];

const WalletTransactionHistory = (props) => {
    const getCoinIcon = (icon) => {
        if (icon == "tronIcon") {
            return tronIcon;
        }
        else {
            return binanceIcon;
        }
    }

    const checkTransactionHistory = () => {
        if (props.transactionHistory.length == 0) {
            return (
                <div className="search-icon">
                    <img src={searchIcon}></img>
                    <p>No transaction yet...</p>
                </div>
            )
        } 
    }

  const createTable = () => {
    row = props.transactionHistory;

    return (
      <tbody>
        {row.map((item) => {
          return (
            <tr>
              <td>{item.date}</td>
              <td><img src={getCoinIcon(item.icon)} style={{width: "35px"}}/></td>
              <td>{item.trx}</td>
              <td>{item.deposit}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <>
      <h3 style={{ fontSize: "21px", margin: "0px" }}>Transaction History</h3>
      <div className="transaction-history">
        <table id="wallet_transaction_history">
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Date</th>
              <th style={{ width: "18%" }}>Coin</th>
              <th style={{ width: "18%" }}>Amount</th>
              <th style={{ width: "30%" }}>Type</th>
              <th style={{ width: "16%" }}>Status</th>
            </tr>
          </thead>
          {createTable()}
        </table>
      </div>
      {checkTransactionHistory()}
    </>
  );
};

export default WalletTransactionHistory;
