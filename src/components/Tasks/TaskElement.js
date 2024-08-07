import React, { useEffect, useState } from 'react';
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png";
import uncheckedIcon from "../../assets/images/Vector-Search-PNG-Image.png";
import "./Tasks.css";
import BigNumber from "bignumber.js";
import { useSelector } from 'react-redux';
import { selectAccount, selectAccountId } from '../../selectors/accountSelectors';
const TaskElement = (props) => {
    const accountID = useSelector(selectAccountId);
    const account = useSelector(selectAccount);
    const [isVisible, setIsVisible] = useState(false);

    const startTask = () => {
        setIsVisible(!isVisible);
    }

    const getIcon = (icon) => {
        if (icon == "telegramIcon") {
            return telegramIcon;
        }
    }
    
    const getTaskState = (checking) => {
        if (checking == true) {
            return checkedIcon
        }
        else {
            return uncheckedIcon
        }
    }

    const handleCheckButtonClick = () => {
        props.handleCheck(props);
        return;
        
    }
  return (
    <>
        <div className='task-element'>
            <div>
                <p className='task-name'>{props.title}</p>
                <p className='task-bonus'>💰 {new BigNumber(props.bonus).div("1000000000").toString()}TH/s</p>
            </div>
            {
                props.state == null ?
                <div className='task-start' style={{ display: isVisible ? 'none' : 'flex', justifyContent: "flex-end"}}>
                <a href={props.type ? props.link : `https://t.me/share/url?url=https://t.me/sky_miner_bot?start=${accountID}&text=Play%20and%20Earn%20free`} target='_blank'>
                    <button className='btn3d btn-primary' onClick={startTask}>Start</button>
                </a>
            </div> : null}
            <div style={{ display: isVisible ? 'flex' : 'none', justifyContent: "space-around"}}>
                <a href={props.type ? props.link : `https://t.me/share/url?url=https://t.me/sky_miner_bot?start=${accountID}&text=Play%20and%20Earn%20free`} target='_blank'>
                    <button className='btn3d btn-primary'>Go</button>
                </a>
                <button className='btn3d btn-danger' onClick={() => handleCheckButtonClick()}>Check</button>
            </div>
        </div>
    </>
  )
}

export default TaskElement;
