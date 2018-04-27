import axios from 'axios';

const initialState = {
  toDoList: [],
}


const GET_TODOS = 'GET_TODOS';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SAVE_TODO = 'SAVE_TODO';




export function getAllToDos(){
  const toDoList =
    axios.get('https://practiceapi.devmountain.com/api/tasks')
      .then ( response => {
        return response.data
      })
      return {
        type: GET_TODOS,
        payload: toDoList
      }
  }

export function addToDo(title){
  const newList =
    axios.post('https://practiceapi.devmountain.com/api/tasks/', {title : title} )
      .then ( response => {
        return response.data
      })
      return {
        type: ADD_TODO,
        payload: newList
      }
  }


  export function removeToDo(id){
    const newList =
      axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
        .then ( response => {
          return response.data
        })
        return {
          type: REMOVE_TODO,
          payload: newList
        }
    }

  export function completeToDo (id){
    const newList =
       axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`, 'completed')
       .then ( response => {
         console.log('completed', response.data)
         return response.data
       })
       return {
         type: COMPLETE_TODO,
         payload: newList
       }
  }


  export function saveToDo (id, item){
    const newList =
       axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: item.title, description:item.description})
       .then ( response => {
         console.log('completed', response.data)
         return response.data
       })
       return {
         type: SAVE_TODO,
         payload: newList
       }
  }


export default function properties(state = initialState, action){
  switch (action.type){
    case GET_TODOS + '_FULFILLED':
      return Object.assign({}, state, {toDoList: action.payload});
    case ADD_TODO + '_FULFILLED':
      return Object.assign({}, state, {toDoList: action.payload});
    case REMOVE_TODO + '_FULFILLED':
      return Object.assign({}, state, {toDoList: action.payload});
    case COMPLETE_TODO + '_FULFILLED':
      return Object.assign({}, state, {toDoList: action.payload});
    case SAVE_TODO + '_FULFILLED':
      return Object.assign({}, state, {toDoList: action.payload});
    default:
      return state;
  }
}
