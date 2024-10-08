import React, {useState, useEffect} from 'react'
import bnbIcon from "../../assets/images/bnb-front.webp"
// import coinMining from "../../assets/images/coin-mining.png"
// import videoTron from "../../assets/images/miner-2.mp4"
import { Link } from 'react-router-dom'
import BinanceMiningInfo from './BinanceMiningInfo'
import "./BinanceMining.css"
import { selectAccountId, selectTHSpeed, selectTrxRatio, selectTrxValue } from '../../selectors/accountSelectors'
import { useSelector, useDispatch } from 'react-redux'
import BigNumber from "bignumber.js";
import axios from 'axios'
import { setTHSpeed, setBNBRatio, setBNBValue } from '../../actions/accountActions'

const BinanceMining = () => {
    const [bnbValue, setValue] = useState();
    const [bnbSpeed, setBNBSpeed] = useState();
    const [bnbEarningSpeed, setBnbEarningSpeed] = useState(0)
    const [ratio, setRatio] = useState();
    const [trxEarningSpeed, setTrxEarningSpeed] = useState(0)
    const accountID = useSelector(selectAccountId);
    // const ratioSelector = useSelector(selectTrxRatio);
    // const trxValueSelector = useSelector(selectTrxValue);
    // const trxSpeedSelector = useSelector(selectTHSpeed);
    const [allChanged, setAllChanged] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/bnb/${accountID}`).then((res) => {
            console.log(res.data.message)
            if (res.data.success === true) {
                dispatch(setTHSpeed(res.data.message.thSpeed));
                dispatch(setBNBRatio(res.data.message.ratio));
                dispatch(setBNBValue(res.data.message.balance));

                setBNBSpeed(res.data.message.thSpeed);
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
        if (bnbValue === undefined || bnbSpeed === undefined) 
            setAllChanged(!allChanged)
        else 
           interval = setInterval(() => {
                setValue(prev => new BigNumber(prev).plus(new BigNumber(bnbSpeed).div(new BigNumber(ratio))).toString())
            }, 1200);
        
        return () => {
            clearInterval(interval)
        }
    }, [allChanged])

  return (
    <>
        <div className='bnb-mining-state'>
            <div style={{display:"flex", alignItems: "center", flexDirection: "column"}}>
                <div className='bnb-value'>
                    <img src={bnbIcon} style={{maxHeight:"40px", paddingRight: "10px"}}></img>
                    <p style={{fontSize: "25px", fontWeight: "700", padding: "0px", margin: "0px"}}>{new BigNumber(bnbValue).div(new BigNumber("1000000000")).toFixed(10)} BNB</p>
                </div>
                <p style={{fontSize: "14px", padding: "0px", margin: "0px"}}>⚡ {new BigNumber(bnbSpeed).div(new BigNumber("1000000000")).toFixed(3)} TH/s</p>
                
            </div>
            <div style={{paddingTop: "10px", display: "flex"}}>
                <Link to="/binance_withdraw" className='boost-claim-link'>
                    <button type='button' className='btn-danger btn3d boost-claim-btn'>
                        Claim
                    </button>
                </Link>
                <Link to="/boost?is_bnb=true" className='boost-claim-link'>
                    <button type='button' className='btn-primary btn3d boost-claim-btn'>
                        Boost &nbsp;<p style={{margin: "0px", fontSize: "20px"}}>🚀</p>
                    </button>    
                </Link>
            </div>
        </div>
        <div>
            {/* <img src={coinMining} style={{width: "100%"}}></img> */}
            <video autoPlay loop muted poster="/assets/image/poster.png">
                <source src="/assets/image/bnb-miner-2.mov" type="video/mp4" />
            </video>
        </div>
        <BinanceMiningInfo thSpeed={bnbSpeed} ratio={ratio}/>
    </>
  )
}

export default BinanceMining;