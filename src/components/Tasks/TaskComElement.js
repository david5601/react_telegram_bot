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
            <div className='task-start'>
                <button className='btn3d btn-primary' style={{width: "-webkit-fill-available"}}>Start</button>
            </div>
        </div>
    </>
  )
}

export default TaskComElement;
