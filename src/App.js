import { useReducer, useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Todo from './Components/Todo/Todo';

export const ACTIONS ={
  ADD_TODO : "add_todo",
  TOGGLE_TODO:"toggle_todo",
  DELETE_TODO:"delete_todo"
}


const reducer = (todos , action)=>{
    switch(action.type){
     case ACTIONS.ADD_TODO :
       return [...todos, newTodo(action.payload.name)];
       case ACTIONS.TOGGLE_TODO:
         return todos.map(todo=>{
           if(todo.id===action.payload.id){
             return {...todo, complete: !todo.complete};
           }
           else
             return todo;
         });
         case ACTIONS.DELETE_TODO:
           return todos.filter(todo=>todo.id!==action.payload.id);
       default:
         return todos;

    }
}

const newTodo =(name)=>{
  return {
    id:Date.now(),
    name:name,
    complete: false
  }
}

function App() {
  const [todos,dispatch] = useReducer(reducer,[]);
  const [name,setName] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO , payload:{name:name}});
    //console.log(name);
    setName('');
  }

    console.log(todos);

  return (
    <div className="App">
        <Counter></Counter>
        <br /><br /><br />
        <h3>TODO List</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </form>
         {
           todos.map(todo=><Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>)
         }
    </div>
  );
}

export default App;
