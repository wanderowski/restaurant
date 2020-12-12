import React,{useState} from 'react'
import ToDoList from '../../components/todolist'


function ToDo() {
    const [todoitems, setTodoitems] = useState(['Check the homework', 'Update the phone', 'Study React for 2 hours', 'Play with friends'])
    const [newItem, setNewItem] = useState('')
  
    const addItem = (e) => {
        setTodoitems([...todoitems, newItem])
        document.querySelector('#addItemInput').value=''
    }

    const getNewItem = e => {
        setNewItem(e.target.value)
    }
    return (
        <div>
            <ToDoList todoitems={todoitems}/><br/><br/>
            <input type="text" onChange={getNewItem} id="addItemInput"/>
            <button onClick={addItem}>Add New Item!</button>
        </div>
        
    )
}

export default ToDo