import React, { useEffect, useState } from 'react';
import TaskElement from './TaskElement';
import TaskComElement from './TaskComElement';
import moneyBag from "../../assets/images/money-bag.png"
import "./Tasks.css";
import "../../assets/css/switch_toggle_button.scss"
import axios from 'axios'
import { selectAccount, selectAccountId } from '../../selectors/accountSelectors'
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../actions/accountActions';

const Tasks = () => {
  const [initialzeTasks, setTasks] = useState();
  const [isChecked, setChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const accountID = useSelector(selectAccountId);
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks()
  }, [accountID])

  const getTasks = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/tasks/${accountID}`).then((res) => {
      if (res.data.success === true) {
        setTasks(res.data.message)
      }
    }).catch(error => {

    }).finally(

    )

  }

  const handleCheck = async (data) => {
    if (data.type == 1) {
      const urlObj = new URL(data.link);
      const chatId = urlObj.pathname.slice(1);

      //check join status
      const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_KEY}/getChatMember?chat_id=@${chatId}&user_id=${accountID}`;
      try {
        const response = await axios.get(url);
        const responseData = response.data;
        if (responseData.ok) {
          const status = responseData.result.status;
          if (status === 'member' || status === 'administrator' || status === 'creator') {
            const taskStatus = {
              id: accountID,
              task_id: data.id
            }
            axios.post(`${process.env.REACT_APP_BACKEND_API}/taskstatus`, taskStatus).then(res => {
              if (res.data.success)
                //add success notification here.
                getTasks()
                setIsSuccess(!isSuccess)
            }).catch(error => {
              console.log(error)
            })

          } else {
            console.log(`User ${accountID} is not a member of the chat ${chatId}.`);
          }
        } else {
          console.error('Error:', responseData.description);
        }
      } catch (error) {
        console.error('Error fetching chat member info:', error);
      }
    } else if(data.type == 0) {
      if (data.link <= account.referral_counts) {
        const taskStatus = {
          id: accountID,
          task_id: data.id
        }
        // complete task
        axios.post(`${process.env.REACT_APP_BACKEND_API}/taskstatus`, taskStatus).then(res => {
          if (res.data.success)
            //add success notification here.
            getTasks()
            setIsSuccess(!isSuccess)

        }).catch(error => {
          console.log(error)
        })

      }
    } else if(data.type == 2) {
      const taskStatus = {
        id: accountID,
        task_id: data.id
      }
      // complete task
      axios.post(`${process.env.REACT_APP_BACKEND_API}/taskstatus`, taskStatus).then(res => {
        if (res.data.success)
          //add success notification here.
          getTasks()
          setIsSuccess(!isSuccess)

      }).catch(error => {
        console.log(error)
      })

    }
  }

  const getInitialzeTasks = () => {
    console.log(initialzeTasks?.length)
    return (
      <div id="tasks_list">
        {initialzeTasks?.map((item, index) => {
          return (
            isChecked == (item.task_completed_status != null) ?
              <TaskElement key={index} id={item.task_id} title={item.task_name} bonus={item.bonus} during={"30"} state={item.task_completed_status} link={item.link} type={item.type} handleCheck={handleCheck} /> : null
          )
        })}
      </div>
    )
  }

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  }

  const checkSuccessMessage = () => {
    setIsSuccess(!isSuccess);
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
        <input id="d" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <label for="d">
          <div className="can-toggle__switch" data-checked="Completed" data-unchecked="New"></div>
        </label>
      </div>
      
      {getInitialzeTasks()}
      
      <div className='success-alert-content' style={{ display: isSuccess ? 'block' : 'none' }}>
        <div className='success-alert' style={{display: "flex", alignContent: "center", flexDirection: "column"}}>
          <h2>Conguratulation!</h2>
          <p>Stay shining, keep grinding, in every cloud, find that silver lining</p>
          <button className='btn3d btn-primary' onClick={checkSuccessMessage}>OK</button>
        </div>
      </div>

      <div className='success-alert-content' style={{ display: isSuccess ? 'none' : 'block' }}>
        <div className='success-alert' style={{display: "flex", alignContent: "center", flexDirection: "column"}}>
          <h2>Faild!</h2>
          <p>You didn't perform this task.</p>
          <button className='btn3d btn-primary' onClick={checkSuccessMessage}>OK</button>
        </div>
      </div>
      
    </>
  )
}

export default Tasks;
