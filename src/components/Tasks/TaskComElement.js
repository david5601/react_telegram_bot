import React, { useEffect, useState } from 'react';
import "./Tasks.css";
import BigNumber from "bignumber.js";


const TaskComElement = (props) => {

  return (
    <>
        <div className='task-element'>
            <div>
                <p className='task-name'>Watch & like the video on YouTube</p>
                <p className='task-bonus'>💰 50TH/s</p>
            </div>
            <div className='task-start' style={{ display: 'flex', justifyContent: "flex-end"}}>
                <button className='btn3d btn-primary'>Start</button>
            </div>
        </div>
    </>
  )
}

export default TaskComElement;
