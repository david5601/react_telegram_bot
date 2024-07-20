import React from 'react'
import moneyBag from "../../assets/images/money-bag.png";
import telegramIcon from "../../assets/images/telegram.png"
import checkedIcon from "../../assets/images/check_10464786.png"
import "./Tasks.css";

const Tasks = (props) => {
  return (
    <>
        <div className='title'>
            <h1>Tasks</h1>
            <img src={moneyBag} className='money-bag'></img>
        </div>

        <div id="tasks_list">
            <div className='task-element'>
                <img src={telegramIcon} className='task-icon'></img>
                <div style={{paddingLeft: "10px", paddingRight: "70px", minWidth: "236px"}}>
                    <p className='task-name'>Join our news channel</p>
                    <div>
                        <p className='task-improve-speed'>
                            ⚡ 150TH/s
                            &nbsp;
                            <p style={{fontSize: "12px", margin: "0px"}}>/30days</p>
                        </p>
                    </div>
                </div>
                <img src={checkedIcon} className='task-checked'></img>
            </div>

            <div className='task-element'>
                <img src={telegramIcon} className='task-icon'></img>
                <div style={{paddingLeft: "10px", paddingRight: "70px", minWidth: "236px"}}>
                    <p className='task-name'>Join our chat</p>
                    <div>
                        <p className='task-improve-speed'>
                            ⚡ 150TH/s
                            &nbsp;
                            <p style={{fontSize: "12px", margin: "0px"}}>/30days</p>
                        </p>
                    </div>
                </div>
                <img src={checkedIcon} className='task-checked'></img>
            </div>

        </div>
    </>
  )
}

export default Tasks;
