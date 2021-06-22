import React from 'react';
import { ACTIONS } from '../../App';

const Todo = (props) => {
   const {todo,dispatch} = props;
   const handleToggleCLick =()=>{
     dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}});
   }
   const handleDeleteClick=()=>{
      dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}});
   }
   return (
        <div>
           <span style={{color :todo.complete?'#AAA':'#000'}}>{todo.name}</span>
           <button onClick={handleToggleCLick}>Toggle</button>
           <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default Todo;