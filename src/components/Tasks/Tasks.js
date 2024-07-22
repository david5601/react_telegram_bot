import React from 'react';
import TaskElement from './TaskElement';
import moneyBag from "../../assets/images/money-bag.png"
import "./Tasks.css";

const Tasks = (props) => {
  return (
    <>
        <div className='title'>
            <h1>Tasks</h1>
            <img src={moneyBag} className='money-bag'></img>
        </div>

        <div id="tasks_list">
            <TaskElement taskName="Join our news channel" speed="150TH/s" during="30days"/>
            <TaskElement taskName="Join our chat" speed="150TH/s" during="30days"/>
        </div>
    </>
  )
}

export default Tasks;
