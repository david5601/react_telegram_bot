import React from 'react';
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png";
import uncheckedIcon from "../../assets/images/Vector-Search-PNG-Image.png";
import "./Tasks.css";
import BigNumber from "bignumber.js";


const TaskElement = (props) => {

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
            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${props.icon}`} className='task-icon'></img>
            <div style={{paddingLeft: "10px", width: "-webkit-fill-available"}}>
                <p className='task-name'>{props.title}</p>
                <div>
                    <div className='task-improve-speed'>
                        ⚡ {new BigNumber(props.bonus).div("1000000000").toString()}TH/s
                        <p style={{fontSize: "12px", margin: "0px"}}>/{props.during}days</p>
                    </div>
                </div>
            </div>
            <img src={getTaskState(props.state)} className='task-checked'></img>
        </div>
    </>
  )
}

export default TaskElement;
