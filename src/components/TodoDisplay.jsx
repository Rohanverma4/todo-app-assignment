import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodo,addTodo,filterTodo,allTodoData,searchTodo } from '../redux/Actions';
import './css/TodoDisplay.css'
import { TodoInput } from './TodoInput';
export const TodoDisplay = () => {
    const [searchTask, setSearchTask] = useState("")
    console.log(searchTask)
    const data1 = useSelector((store) => store)
    console.log(data1)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get("https://todoapp-json-server.herokuapp.com/todo")
        .then((res)=> {
            dispatch(getTodo(res.data))
            // console.log(typeof res.data)
        })
    }

    const setComplete = () => {
        dispatch(filterTodo(false))

    }
    const setAllData = () => {
        dispatch(allTodoData())
    }

    const setIncomplete = () => {
        dispatch(filterTodo(true))
    }

    const searchTask1 = () => {
        dispatch(searchTodo(searchTask))
    }
    return (
        <>
        <TodoInput fetchData={fetchData}/>
        <div className="displayContainer">
            <div className='topDiv'>
                <div className='searchDiv'>
                    <input
                        placeholder='Search by task name'
                        onChange={(e) => setSearchTask(e.target.value)}
                        type='text' />
                    <button
                        onClick={searchTask1}>Search</button>
                </div>
                <div className='filterDiv'>
                    <button onClick={setAllData} className='all'>All</button>
                    <button onClick={setComplete} className='com'>Completed</button>
                    <button onClick={setIncomplete} className='incom'>Incompleted</button>
                </div>
            </div>
            <div className='allTodosDiv'>
                <div className='headTodoDiv'>
                    <h6 className='Task'>Task</h6>
                    <h6>Time</h6>
                    <h6>Date</h6>
                    <h6>Actions</h6>
                </div>
                {data1?.filtertodo &&
                    data1?.filtertodo.map((item) => {
                        return (
                                <SingleTodo
                                      id={item.id}
                                      isTodo={item.isTodo}
                                      task={item.task}
                                      date={item.date}
                                      time={item.time}
                                      fetchData={fetchData}
                                />
                            )
                    })
                }
            </div>
        </div>
        </>
    )
}

const SingleTodo = ({id,isTodo,task,date,time,fetchData}) => {
    const updateIsTodo = (e) => {
        let todo_id = e.target.id;
        axios.patch(`https://todoapp-json-server.herokuapp.com/todo/${todo_id}`, {
            isTodo:!isTodo,
        }).then((res) => {
            console.log(res.data);
            fetchData()
        })
    }
    const deleteTodo = (e) => {
        let todo_id = e.target.id;
        axios.delete(`https://todoapp-json-server.herokuapp.com/todo/${todo_id}`)
        .then((res) => {
            console.log(res.data)
            fetchData()
        })
    }
    return (
        <div className='singleTodoDiv' >
            <p className='task'>{task}</p>
            <p>{date}</p>
            <p>{time}</p>
            <div className='buttonDiv'>
                <button id={id} onClick={updateIsTodo}>{isTodo?"Todo":"Done"}</button>
                <button id={id} onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    )
}