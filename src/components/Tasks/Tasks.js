import React, { useEffect, useState } from 'react';
import TaskElement from './TaskElement';
import TaskComElement from './TaskComElement';
import moneyBag from "../../assets/images/money-bag.png"
import "./Tasks.css";
import "../../assets/css/switch_toggle_button.scss"
import axios from 'axios'
import { selectAccountId } from '../../selectors/accountSelectors'
import { useSelector } from 'react-redux';

const Tasks = () => {
  const [initialzeTasks, setTasks] = useState();
  const [isChecked, setChecked] = useState(false);
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
    console.log(initialzeTasks?.length)
    return (
      <div id="tasks_list">
        {initialzeTasks?.map((item, index) => {
          console.log(item)
          console.log(isChecked == (item.task_completed_status != null) )
          return (
              isChecked == (item.task_completed_status != null) ? 
                <TaskElement title={item.task_name} bonus={item.bonus} during={"30"} state={item.task_completed_status} key={0} link={item.link}/> : null
            // <TaskElement icon={item.image_url} title={item.task_name} bonus={item.bonus} during={"30"} state={item.task_completed_status} key={index} />
          )
        })}
      </div>
    )
  }

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <>
      <div className='title'>
        <p>Complete the</p>
        <p>mission,</p>
        <p>earn the commission!</p>
        {/* <img src={moneyBag} className='money-bag'></img> */}
      </div>

      <div className='subtitle'>
        But hey, only qualified actions unlock the galaxy! ✨
      </div>
      <div className="can-toggle demo-rebrand-1">
        <input id="d" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <label for="d">
          <div className="can-toggle__switch" data-checked="Completed" data-unchecked="New"></div>
        </label>
      </div>
      {getInitialzeTasks()}
      {/* <div className='task-list'>
        { isChecked ? 
          <TaskComElement/> : <TaskElement title={"Test"} bonus={"Test"} during={"30"} state={false} key={0} />
        }
      </div> */}
    </>
  )
}

export default Tasks;
