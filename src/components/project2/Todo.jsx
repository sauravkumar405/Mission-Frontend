import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import '../../App.css'
const FETCH_URL = 'https://dummyjson.com/todos?limit=10&skip=80'


function Todo() {
  const [items, setItems] = useState({})
  let groupedTodo = {}
  useEffect(() => {
    axios.get(FETCH_URL)
      .then(res => {
        res.data.todos.forEach((ele) => {
          if (!groupedTodo[ele.userId]) groupedTodo[ele.userId] = []
          groupedTodo[ele.userId].push(ele)
        })
        // console.log(groupedTodo)
        setItems(groupedTodo)
      }).catch(err => console.log(err))
  }, [])
  return (<div className='box'>
    {Object.keys(items).map((user, i) =>
      <TodoItem key={i} user={user} todo={items[user]}/>
    )}
  </div>
  )
}

export default Todo