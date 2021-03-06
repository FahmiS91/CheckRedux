import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const  ListTask=()=> {
    let todos = useSelector(state=>state.todos);

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <Task key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default ListTask