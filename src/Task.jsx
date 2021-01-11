import React from 'react';

export default function Task(props){
    return (
        <div>
            {props.task.title}

            <button onClick={()=>props.plus(props.task.id)} >+</button>

            <button onClick={()=>props.minus(props.task.id)}>-</button>

        </div>
    );
}