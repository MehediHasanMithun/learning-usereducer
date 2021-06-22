import React, { useReducer } from 'react';

const ACTION = {
    INCREMENT:"increment",
    DECREMENT:"decrement"
}

const reducer =(state,action)=>{
    switch(action.type){
        case ACTION.INCREMENT:
            return {count:state.count+1};
            case ACTION.DECREMENT:
                return {count:state.count-1};
                default:
                    return state;
    }

}

const Counter = () => {
    const [state,dispatch] = useReducer(reducer,{count:0});
    const handleDecrement = ()=>{
        dispatch({type:ACTION.DECREMENT});
    }
    const handleIncrement = ()=>{
        dispatch({type:ACTION.INCREMENT});
    }
    return (
        <div>
            <button style={{fontSize:"50px"}} onClick={handleDecrement}>-</button>
            <span style={{fontSize:"50px"}}>{state.count}</span>
            <button style={{fontSize:"50px"}} onClick={handleIncrement}>+</button>

        </div>
    );
};

export default Counter;