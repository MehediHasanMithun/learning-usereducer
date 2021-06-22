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
           <span style={{margin:"10px",padding:"10px",backgroundColor:"lightgray",height:"20px",width:"30px",fontSize:"20px",borderRadius:"7px",fontWeight:"700", color :todo.complete?'green':'black'}}>{todo.name}</span>
           <button style={{fontSize:"20px",backgroundColor:"green",padding:"10px", margin:"20px",border:"none",borderRadius:"7px"}} onClick={handleToggleCLick}>Toggle</button>
           <button  style={{fontSize:"20px",backgroundColor:"red",padding:"10px", margin:"20px",border:"none",borderRadius:"7px"}} onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default Todo;