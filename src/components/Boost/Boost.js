import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Boost.css"

const Boost = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [walletAddress, setWalletAddress] = useState('');

    const generateAddress = () => {
        setIsButtonVisible(false);
        setWalletAddress('TLQJyCD6M5FzK7hwYoZh6tCMvdZ9vcLNZQ');
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(walletAddress);
            showModal()
        } catch (err) {
            console.log(err)
        }
    }

    const showModal = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        
    })

  return (
    <>
        <div className='group-box'>
            <h2 className='boost-title'>Payment Tron:</h2>
            <div className='common'>
                <p>1. Click "Generate Wallet"</p>
                <p>2. Send the any amount to this wallet</p>
                <p>3. Wait, the funds will be automatically credited to your account</p>
            </div>
            {isButtonVisible && (
                <div id="generate_address">
                    <button className='btn3d btn-primary boost-generate-btn' onClick={generateAddress}>Generate adress</button>
                </div>
            )}
            
            {!isButtonVisible && (
                <>
                    <div className='wallet-address' onClick={copyToClipboard}>
                        {walletAddress}
                    </div>
                    <p className='wallet-address-copy'>Click on the wallet to copy</p>
                </>
            )}
        </div>

        <div id="copyModal" className="modal" style={{ display: isVisible ? 'none' : 'block' }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2 style={{marginBottom: "5px", marginTop: "5px"}}>Farmix.biz</h2>
                </div>
                <div className="modal-body">
                    <p>Copied link: {walletAddress}</p>
                </div>
                <div className="modal-footer">
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <button className='btn-hover color-9' onClick={showModal}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Boost;