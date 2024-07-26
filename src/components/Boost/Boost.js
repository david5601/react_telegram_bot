import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Boost.css"
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectAccountId } from '../../selectors/accountSelectors'
import { useLocation } from 'react-router-dom';

const Boost = () => {
    const accountID = useSelector(selectAccountId);
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [walletAddress, setWalletAddress] = useState('');
    const [isBnb, setIsBnb] = useState(false);
    

    useEffect(() => {
        setIsBnb(new URLSearchParams(location.search).get('is_bnb'));
    }, [])


    const generateAddress = () => {
        let query;
        if(isBnb === 'true') {
            query = `${process.env.REACT_APP_BACKEND_API}/generate_bnb_address/${accountID}`
        } else {
            query =`${process.env.REACT_APP_BACKEND_API}/generate_trx_address/${accountID}`
        }
         
        setIsButtonVisible(false);
        axios.post(query).then((res) => {
            console.log(res.data)
            if (res.data.success === true) {
                setWalletAddress(res.data.message.address);
            }
        }).catch(error => {

        }).finally(

        )
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
                        <button className='btn3d btn-primary boost-generate-btn' onClick={generateAddress}>Generate address</button>
                    </div>
                )}

                {!isButtonVisible && (
                    <>
                        <div className='wallet-address' onClick={copyToClipboard}>
                            <p>{walletAddress}</p>
                        </div>
                        <p className='wallet-address-copy'>Click on the wallet to copy</p>
                    </>
                )}
            </div>

            <div id="copyModal" className="modal" style={{ display: isVisible ? 'none' : 'block' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2 style={{ marginBottom: "5px", marginTop: "5px" }}>Farmix.biz</h2>
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