import React from 'react'
import WithdrawButton from './WithdrawButton'
import WalletTransactionHistory from './WalletTransactionHistory'
import "./Wallets.css"
const Wallets = () => {
    return (
      <>
        <div className='wallet-section'>
            <div className='container'>
                <div className='wallet-section__inner'>
                    <WithdrawButton/>
                    <WithdrawButton/>
                    <WalletTransactionHistory/>
                </div>
            </div>
        </div>
        
      </>
    )
}

export default Wallets;
