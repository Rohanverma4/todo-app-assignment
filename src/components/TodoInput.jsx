import { useState } from 'react'
import './css/TodoInput.css'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/Actions'
import { TodoDisplay } from './TodoDisplay'
export const TodoInput = ({fetchData}) => {

    const id = uuid()
    const dispatch = useDispatch()
    const [taskData, setTaskData] = useState({
        task:'',
        isTodo: true,
        id: id,
        date: '',
        time: ''
    })

    const handleAdd = () => {
       if (!taskData.task){
           alert('Task is not added');
           return;
       } else if (!taskData.date){
           alert('Please select a date for todo')
           return;
       } else if (!taskData.time){
           alert('Please select a time for todo');
           return;
       } else {
           postData(taskData)
       }
    }
    
    const postData = (taskData) => {
        console.log(taskData)
        axios.post('https://todoapp-json-server.herokuapp.com/todo',taskData)
        .then((res) => {
            // console.log(res.data)
            dispatch(addTodo(res.data))
            fetchData()
            window.location.reload();
        })
    }
    // console.log(taskData)

    const handleChange = (e) => {
        
        if (e.target.type == 'text'){
            setTaskData(
                    {
                        ...taskData,
                        task: e.target.value
                    });
        }

        if (e.target.type == 'date'){
            setTaskData(
                    {
                        ...taskData,
                        date: e.target.value
                    });
        }

        if (e.target.type == 'time'){
            setTaskData(
                    {
                        ...taskData,
                        time: e.target.value
                    });
        }
    }
    return (
        <>
            <div className="inputContainer">
                <div className='taskDiv'>
                    <input onChange={handleChange} placeholder="Your task for todo" type="text" />
                    <button onClick={handleAdd}>Add todo</button>
                </div>
                <div className='dateAndTimeDiv'>
                    <input onChange={handleChange} className="date" type="date" />
                    <input onChange={handleChange} className="time" type="time" />
                </div>
            </div>
        </>
    )
}