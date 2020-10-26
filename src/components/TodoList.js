import React from 'react'
import Todo from "./Todo"

export default function TodoList(props) {


    return (
        <div>
            <p>{props.todoData.map(item =>(
                <Todo item={item} handleToggleItem={props.handleToggleItem}/>
            ))}</p>
        </div>
    )
}
