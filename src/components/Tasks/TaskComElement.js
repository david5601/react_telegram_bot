import React, { useEffect, useState } from 'react';
import "./Tasks.css";
import BigNumber from "bignumber.js";


const TaskComElement = (props) => {

  return (
    <>
        <div className='task-element'>
            <div>
                <p className='task-name'>{props.title}</p>
                <p className='task-bonus'>💰 {new BigNumber(props.bonus).div("1000000000").toString()}</p>
            </div>
            <div className='task-start'>
                <button className='btn3d btn-primary' style={{width: "-webkit-fill-available"}}>Go</button>
            </div>
        </div>
    </>
  )
}

export default TaskComElement;
