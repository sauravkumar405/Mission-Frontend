import React from 'react'
import styled from "styled-components";
import '../../App.css'

function TodoItem({todo, user}) {
    // console.log(todo, user)

  return (
    <div className='card'>
        <header>{user}</header>
        
            <ul>
                {todo.map(ele=><li key={ele.userId} className={ele.completed?'green-todo':'red-todo'}>{ele.todo}</li>)}
            </ul>
        
    </div>
  )
}

export default TodoItem