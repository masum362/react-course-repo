import React from 'react'

// prop drilling
const Todo = ({todo,handleChange}) => {
  return (
    <div>
        {todo.title}

        <button onClick={() =>handleChange(todo.id)}>Change title</button>
    </div>
  )
}

export default Todo