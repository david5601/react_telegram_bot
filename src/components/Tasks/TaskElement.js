import React, { useEffect, useState } from 'react';
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png";
import uncheckedIcon from "../../assets/images/Vector-Search-PNG-Image.png";
import "./Tasks.css";
import BigNumber from "bignumber.js";


const TaskElement = (props) => {

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
  return (
    <>
        <div className='task-element'>
            {/* <img src={`${process.env.REACT_APP_BACKEND}/uploads/${props.icon}`} className='task-icon'></img> */}
            <div>
                <p className='task-name'>Watch & like the video on YouTube</p>
                <p className='task-bonus'>💰 50TH/s</p>
            </div>
            <div className='task-start' style={{ display: isVisible ? 'none' : 'flex', justifyContent: "flex-end"}}>
                <button className='btn3d btn-primary' onClick={startTask}>Start</button>
            </div>
            <div style={{ display: isVisible ? 'flex' : 'none', justifyContent: "space-around"}}>
                <button className='btn3d btn-primary'>Go</button>
                <button className='btn3d btn-danger'>Check</button>
            </div>
            {/* { !isVisible & 
                <div>d
                    
                </div>
            } */}
            {/* <div style={{paddingLeft: "10px", width: "-webkit-fill-available"}}>
                
                <div>
                    <div className='task-improve-speed'>
                        ⚡ {new BigNumber(props.bonus).div("1000000000").toString()}TH/s
                        <p style={{fontSize: "12px", margin: "0px"}}>/{props.during}days</p>
                    </div>
                </div>
            </div>
            <img src={getTaskState(props.state)} className='task-checked'></img> */}
        </div>
    </>
  )
}

export default TaskElement;
