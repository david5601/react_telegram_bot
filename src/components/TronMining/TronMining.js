import React, { useState, useEffect } from 'react'
import TronMiningInfo from './TronMiningInfo'
import tronIcon from "../../assets/images/tron-front.webp"
import coinMining from "../../assets/images/coin-mining.png"
import videoTron from "../../assets/images/miner-2.mp4"
import axios from 'axios'
import "./TronMining.css"
import { selectAccountId, selectTHSpeed, selectTrxRatio, selectTrxValue } from '../../selectors/accountSelectors'
import { useSelector, useDispatch } from 'react-redux'
import BigNumber from "bignumber.js";
import axios from 'axios'
import { setTHSpeed, setTrxRatio, setTrxValue } from '../../actions/accountActions'

const TronMining = () => {
    const [trxValue, setValue] = useState();
    const [trxSpeed, setTrxSpeed] = useState();
    const [ratio, setRatio] = useState();
    const [trxEarningSpeed, setTrxEarningSpeed] = useState(0)
    const accountID = useSelector(selectAccountId);
    // const ratioSelector = useSelector(selectTrxRatio);
    // const trxValueSelector = useSelector(selectTrxValue);
    // const trxSpeedSelector = useSelector(selectTHSpeed);
    const [allChanged, setAllChanged] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/trx/${accountID}`).then((res) => {
            console.log(res.data.message)
            if (res.data.success === true) {
                dispatch(setTHSpeed(res.data.message.thSpeed));
                dispatch(setTrxRatio(res.data.message.ratio));
                dispatch(setTrxValue(res.data.message.balance));

                setTrxSpeed(res.data.message.thSpeed);
                setValue(res.data.message.balance);
                setRatio(res.data.message.ratio);
                setAllChanged(true);
            }
        }).catch(error => {

        }).finally(

        )
    }, [accountID])

    
    useEffect(() => {
        let interval
        if (trxValue === undefined || trxSpeed === undefined) 
            setAllChanged(!allChanged)
        else 
           interval = setInterval(() => {
                setValue(prev => new BigNumber(prev).plus(new BigNumber(trxSpeed).div(new BigNumber(ratio))).toString())
            }, 1200);
        
        return () => {
            clearInterval(interval)
        }
    }, [allChanged])

    return (
        <>
            <div className='tron-mining-state'>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div className='tron-value'>
                        <img src={tronIcon} style={{ maxHeight: "55px" }}></img>
                        <p style={{ fontSize: "25px", fontWeight: "700", padding: "0px", margin: "0px" }}>{new BigNumber(trxValue).div(new BigNumber("1000000000")).toFixed(10)} TRX</p>
                    </div>
                    <p style={{ fontSize: "14px", padding: "0px", margin: "0px" }}>⚡ {new BigNumber(trxSpeed).div(new BigNumber("1000000000")).toFixed(3)} TH/s</p>

                </div>
                <div style={{ paddingTop: "10px", display: "flex" }}>
                    <button type='button' className='btn-danger btn3d boost-claim-btn'>
                        Claim
                    </button>
                    <button type='button' className='btn-primary btn3d boost-claim-btn'>
                        Boost &nbsp;<p style={{ margin: "0px", fontSize: "20px" }}>🚀</p>
                    </button>
                </div>
            </div>
            <div>
                {/* <img src={coinMining} style={{width: "100%"}}></img> */}
                <video autoPlay controls loop>
                    <source src={videoTron} type="video/mp4" />
                </video>
            </div>
            <TronMiningInfo thSpeed={trxSpeed} ratio={ratio}/>
        </>
    )
}

export default TronMining;
