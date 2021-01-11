import React from 'react';
import Task from "./Task";

export default function Board(props){
    return (

        <ul>
            {props.tasks.filter(el=>el.status===props.status).map(el=><Task task={el} plus={props.plus} minus={props.minus}/>)}

        </ul>
    );
}