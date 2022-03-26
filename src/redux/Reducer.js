import {
    ADD_TODO,
    UPDATE_TODO,
    SEARCH_TODO,
    FILTER_TODO,
    DELETE_TODO,
    GET_TODO,
    ALL_TODO
} from './ActionTypes.js';

const initState = {
    todos: [],
    filtertodo: [],
}

export const Reducer = (store = initState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...store,
                todos:[...store.todos,action.payload],
                // filtertodo:[...store.todos,action.payload],
            }
        case GET_TODO:
            return {
                ...store,
                todos:action.payload,
                filtertodo:action.payload,
            }
        case UPDATE_TODO:
            return {
                ...store,
                todos:action.payload,
                filtertodo:action.payload,
            }
        case SEARCH_TODO:
            let newData = store.todos.filter((item) => item.task == action.payload)
            return {
                ...store,
                filtertodo:newData, 
            }
        case FILTER_TODO:
            let filterData = store.todos.filter((item) => item.isTodo == action.payload);
            return {
                ...store,
                filtertodo: filterData,
            }
        case DELETE_TODO:
            let newData1 = store.todos.filter((item) => item.id != action.payload);
            return {
                ...store,
                todos:newData1,
                filtertodo:newData1,
            }
            case ALL_TODO:
                let allData = store.todos;
                return {
                    ...store,
                    filtertodo: allData,
                }
        default:
            return store
    }
}