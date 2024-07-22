import React from 'react';
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png";
import "./Tasks.css";


const TaskElement = (props) => {
  return (
    <>
        <div className='task-element'>
            <img src={telegramIcon} className='task-icon'></img>
            <div style={{paddingLeft: "10px", paddingRight: "70px", minWidth: "236px"}}>
                <p className='task-name'>{props.taskName}</p>
                <div>
                    <p className='task-improve-speed'>
                        ⚡ {props.speed}
                        &nbsp;
                        <p style={{fontSize: "12px", margin: "0px"}}>/{props.during}</p>
                    </p>
                </div>
            </div>
            <img src={checkedIcon} className='task-checked'></img>
        </div>
    </>
  )
}

export default TaskElement;
