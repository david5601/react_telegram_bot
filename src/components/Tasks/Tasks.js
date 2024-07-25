import React, {useEffect, useState} from 'react';
import TaskElement from './TaskElement';
import moneyBag from "../../assets/images/money-bag.png"
import "./Tasks.css";

const Tasks = () => {
  const [initialzeTasks, setTasks] = useState([{icon: "telegramIcon", title: "Join our news channel", bonus: "150", during: "30", state: "checked"}])

  const getInitialzeTasks = () => {
    return (
      <div id="tasks_list">
        {initialzeTasks.map((item) => {
          return (
            <TaskElement icon={item.icon} title={item.title} bonus={item.bonus} during={item.during} state={item.state}/>
          )
          }
        )}
      </div>
    )
  }

  return (
    <>
        <div className='title'>
            <h1>Tasks</h1>
            <img src={moneyBag} className='money-bag'></img>
        </div>

        {getInitialzeTasks()}
        {/* <div id="tasks_list"> */}
            {/* <TaskElement title={initialzeTasks} bonus="150TH/s" during="30days" state/>
            <TaskElement taskName="Join our chat" speed="150TH/s" during="30days"/> */}
        {/* </div> */}
    </>
  )
}

export default Tasks;
