import React from 'react'
import Todo from "./Todo"

export default function TodoList(props) {

    const handleClick = () => {
        props.handleClearItems();
    }
    return (
        <div>
            <p>{props.todoData.map(item =>(
                <Todo item={item} handleToggleItem={props.handleToggleItem}/>
            ))}</p>
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
}
