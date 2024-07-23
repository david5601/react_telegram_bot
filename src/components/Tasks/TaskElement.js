import React from 'react';
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png";
import "./Tasks.css";


const TaskElement = (props) => {

    const getIcon = (icon) => {
        if (icon == "telegramIcon") {
            return telegramIcon;
        }
    }
    
    const getTaskState = (checking) => {
        if (checking == "checked") {
            return checkedIcon
        }
        else {

        }
    }
  return (
    <>
        <div className='task-element'>
            <img src={getIcon(props.icon)} className='task-icon'></img>
            <div style={{paddingLeft: "10px", width: "-webkit-fill-available"}}>
                <p className='task-name'>{props.title}</p>
                <div>
                    <p className='task-improve-speed'>
                        ⚡ {props.bonus}TH/s
                        <p style={{fontSize: "12px", margin: "0px"}}>/{props.during}days</p>
                    </p>
                </div>
            </div>
            <img src={getTaskState(props.state)} className='task-checked'></img>
        </div>
    </>
  )
}

export default TaskElement;
