import React from 'react'

function ToDoItem({todo, deleteTodo}) {
  return (
    <div style={{ display: 'flex'}}>
        <input type="checkbox" id="vehicle1" name="vehicle1" value={todo.completed}/>
        <p>{todo['title']}</p>
        <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
    </div>
  )
}

export default ToDoItem