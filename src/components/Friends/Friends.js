import {useEffect, useState} from 'react'
import LstestOperations from './LstestOperations';
import "./Friends.css"

const Friends = (props) => {
    const [invteurl, setInviteUrl] = useState("https://t.me/farmix_mining_bot?start=6858672674");
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(invteurl);
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <>
        <div style={{minHeight: "170vh"}}>
            <div>
                <h1 className='title'>Referral program</h1>
            </div>
            <div className='referral-section'>
                <div className='container'>
                    <div className='referral-section__box'>
                        <div>
                            <h2 className='invite'>
                                Your Invite Link
                            </h2>
                            <div className='invite-url' onClick={copyToClipboard}>
                                <div>
                                    {invteurl}
                                </div>
                            </div>
                            <div className='clickhelp' >
                                    Click on the link to copy
                            </div>
                        </div>
                        <div className='referral-section__wrapper'>
                            <div className='referral-section__inner1'>
                                <div className='referral-section__inner1-child'>
                                    <div className='referral-section-profit-amount'>
                                        10%
                                    </div>
                                    <div className='referral-section-profit-text' style={{maxWidth: "60px", fontSize: "12px", paddingRight: "7px"}}>
                                        1-st level referral
                                    </div>
                                </div>
                                <div className='referral-section__inner1-child'>
                                    <div className='referral-section-profit-amount'>
                                        5%
                                    </div>
                                    <div className='referral-section-profit-text' style={{maxWidth: "60px", fontSize: "12px", paddingRight: "7px"}}>
                                        2-nd level referral
                                    </div>
                                </div>
                            </div>
                            <div className='referral-section__inner'>
                                <div className='referral-section-profit-amount'>
                                    0.0000
                                </div>
                                <div className='referral-section-profit-text'>
                                    Profit Trx
                                </div>
                            </div>
                            <div className='referral-section__inner'>
                                <div className='referral-section-profit-amount'>
                                    0.0000
                                </div>
                                <div className='referral-section-profit-text'>
                                    Profit Trx
                                </div>
                            </div>
                            <div className='referral-section__inner'>
                                <div className='referral-section-profit-amount'>
                                    0.0000
                                </div>
                                <div className='referral-section-profit-text'>
                                    Profit Trx
                                </div>
                            </div>
                            <div className='referral-section__inner'>
                                <div className='referral-section-profit-amount'>
                                    0.0000
                                </div>
                                <div className='referral-section-profit-text'>
                                    Profit Trx
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LstestOperations/>
        </div>

        <div id="copyModay" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Farmix.biz</h2>
                </div>
                <div className="modal-body">
                    <p>Copied link: {invteurl}</p>
                </div>
                <div className="modal-footer">
                    <div style={{display: "flex", flexDirection: "row-reverse"}}>
                        <button className='btn-hover color-9'>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Friends;
