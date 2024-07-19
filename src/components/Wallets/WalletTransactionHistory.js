import React from 'react'
import "./Wallets.css"
import searchIcon from "../../assets/images/Vector-Search-PNG-Image.png"
let row  = [
    'Date',
    'Coin',
    'Amount',
    'Type',
    'Status'
]



const WalletTransactionHistory = (props) => {
    // const createTable = () => {
    //     let table = []
    //     for (let i = 0; i < row.length; i++) {
    //         let children = []
    //         children.push(<td>{row[i]}</td>)
    //         table.push(<tr>{children}</tr>)
    //     }
    
    //     return table
    // }

  return (
    <>
        <h3 style={{fontSize: "21px", margin: "0px"}}>Transaction History</h3>
        <div className='transaction-history'>
            <table id="wallet_transaction_history">
                <thead>
                    <tr>
                        <th style={{width: "25%"}}>
                            Date
                        </th>
                        <th style={{width: "18%"}}>
                            Coin
                        </th>
                        <th style={{width: "18%"}}>
                            Amount
                        </th>
                        <th style={{width: "30%"}}>
                            Type
                        </th>
                        <th style={{width: "16%"}}>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {createTable()} */}
                </tbody>
            </table>
        </div>
        <div className='search-icon'>
            <img src={searchIcon}></img>
            <p>No transaction yet...</p>
        </div>
    </>
  )
}

export default WalletTransactionHistory;
