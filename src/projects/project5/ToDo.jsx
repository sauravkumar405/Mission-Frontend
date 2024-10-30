import React, { useEffect, useState } from "react";
import TodoItem from "../project5/ToDoItem";

function ToDo() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"))
    if (localTodos && localTodos.length) {
      setTodos(localTodos);
    } else {
      fetch("http://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          const updatedTodos = data.products.map((todo) => {
            return { ...todo, completed: false };
          });
          setTodos(updatedTodos);
          localStorage.setItem("todos", JSON.stringify(todos));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default ToDo;
