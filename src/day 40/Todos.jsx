import React from 'react'
import Todo from './Todo'

const Todos = ({todos,handleChange}) => {
  return (
    <div>
        {todos.map((todo,i) =><Todo handleChange={handleChange} todo={todo} key={i} />)}
    </div>
  )
}

export default Todos