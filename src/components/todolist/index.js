import React from 'react'
import ToDoItem from '../todoitem'


function ToDoList({todoitems}) {
    const todoBlocks = todoitems.map((item, i) =>
        <div key={i}> 
            <ToDoItem desc={item} itemKey={i} />
        </div>
    )    
    return (
        <div>
            {todoBlocks}
        </div>
    )
}

export default ToDoList