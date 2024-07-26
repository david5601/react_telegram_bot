import React, { useEffect, useState } from 'react';
import TaskElement from './TaskElement';
import moneyBag from "../../assets/images/money-bag.png"
import "./Tasks.css";
import axios from 'axios'
import { selectAccountId } from '../../selectors/accountSelectors'
import { useSelector } from 'react-redux';

const Tasks = () => {
  const [initialzeTasks, setTasks] = useState()
  const accountID = useSelector(selectAccountId);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/tasks/${accountID}`).then((res) => {
      if (res.data.success === true) {
        console.log("object")
        setTasks(res.data.message)
      }
    }).catch(error => {

    }).finally(

    )

  }, [accountID])


  const getInitialzeTasks = () => {
    return (
      <div id="tasks_list">
        {initialzeTasks?.map((item, index) => {
          console.log(item)
          return (
            <TaskElement icon={item.image_url} title={item.task_name} bonus={item.bonus} during={"30"} state={item.task_completed_status} key={index} />
          )
        })}
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
    </>
  )
}

export default Tasks;
