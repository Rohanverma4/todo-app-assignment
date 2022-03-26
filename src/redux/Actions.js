import axios from 'axios';
import { useDispatch } from "react-redux";
import {
    ADD_TODO,
    UPDATE_TODO,
    SEARCH_TODO,
    FILTER_TODO,
    DELETE_TODO,
    GET_TODO,
    ALL_TODO
} from './ActionTypes.js';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
})

export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload,
})

export const searchTodo = (payload) => ({
    type: SEARCH_TODO,
    payload,
})

export const filterTodo = (payload) => ({
    type: FILTER_TODO,
    payload,
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
})

export const getTodo = (payload) => ({
    type: GET_TODO,
    payload,
})
export const addTODO = (payload) => {
    return {
      type: ADD_TODO,
      payload,
    };
  };

export const allTodoData = () => ({
    type: ALL_TODO,
})