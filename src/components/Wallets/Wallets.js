import React from 'react'
import TronWithdrawButton from './TronWithdrawButton'
import BNBWithdrawButton from './BNBWithdrawButton'
import WalletTransactionHistory from './WalletTransactionHistory'
import "./Wallets.css"
const Wallets = () => {
    return (
      <>
        <div className='wallet-section'>
            <div className='container'>
                <div className='wallet-section__inner'>
                  <TronWithdrawButton/>
                  <BNBWithdrawButton/>
                  <WalletTransactionHistory/>
                </div>
            </div>
        </div>
        
      </>
    )
}

export default Wallets;
