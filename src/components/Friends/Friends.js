import { useEffect, useState } from 'react'
import LstestOperations from './LstestFriendOperations';
import { useSelector } from 'react-redux';
import { selectAccountId } from '../../selectors/accountSelectors';
import "./Friends.css"
import axios from 'axios'
import BigNumber from 'bignumber.js';

const Friends = () => {
    const accountID = useSelector(selectAccountId);

    const [isVisible, setIsVisible] = useState(true);
    const [invteurl, setInviteUrl] = useState([]);
    const [lstestOperations, setLstestOperations] = useState();

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(invteurl);
            showModal();
        } catch (err) {
            console.log(err)
        }
    }

    const showModal = () => {
        setIsVisible(!isVisible);
    }

    const getTotalProfit = () => {
        console.log("lstestOperations", lstestOperations)
        const sumOfAmounts = lstestOperations?.reduce((sum, item) => {
            return sum.plus(new BigNumber(item.amount));
        }, new BigNumber(0));
        console.log("sumOfAmounts", sumOfAmounts)
        return sumOfAmounts?.div("1000000000").toString() || 0
    }

    useEffect(() => {
        setInviteUrl(`https://t.me/sky_miner_bot?start=${accountID}`)
        axios.get(`${process.env.REACT_APP_BACKEND_API}/friend/${accountID}`).then((res) => {
            if (res.data.success === true) {
                console.log(res.data.message)
                setLstestOperations(res.data.message.filter(transaction => transaction.token_type === 2))
            }
        }).catch(error => {

        }).finally(

        )

    }, [accountID])

    return (
        <>
            <div style={{ minHeight: "150vh" }}>
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
                                        <div className='referral-section-profit-text' style={{ maxWidth: "60px", fontSize: "12px", paddingRight: "7px" }}>
                                            1-st level referral
                                        </div>
                                    </div>
                                    <div className='referral-section__inner1-child'>
                                        <div className='referral-section-profit-amount'>
                                            5%
                                        </div>
                                        <div className='referral-section-profit-text' style={{ maxWidth: "60px", fontSize: "12px", paddingRight: "7px" }}>
                                            2-nd level referral
                                        </div>
                                    </div>
                                </div>
                                <div className='referral-section__inner'>
                                    <div className='referral-section-profit-amount'>
                                        {lstestOperations?.length || 0}
                                    </div>
                                    <div className='referral-section-profit-text'>
                                        Total Referrals
                                    </div>
                                </div>
                                <div className='referral-section__inner'>
                                    <div className='referral-section-profit-amount'>
                                       {getTotalProfit()} TH/s
                                    </div>
                                    <div className='referral-section-profit-text'>
                                        Profit THx
                                    </div>
                                </div>
                                {/* <div className='referral-section__inner'>
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
                                        Profit BNB
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <LstestOperations lstestOperations={lstestOperations} />
            </div>
            <div id="copyModal" className="modal" style={{ display: isVisible ? 'none' : 'block' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2 style={{marginBottom: "5px", marginTop: "5px"}}>Farmix.biz</h2>
                    </div>
                    <div className="modal-body">
                        <p>Copied link: {invteurl}</p>
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

export default Friends;
