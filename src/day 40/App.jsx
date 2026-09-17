// import { useCallback, useReducer, useState } from "react";
// import Child from "./Child";

// import ArtistPage from "./ArtistPage";

// const reducer = (state, action) => {
//      switch(action.type){
//         case "Inc":
//             return state = state + 1
//         case "Dec":
//             return state = state - 1
//         case "Reset":
//             return state = 0
//     }
// };

import { lazy, Suspense, useContext, useState } from "react";
import Loading from "./Loading";
import useCounter from "../hooks/useCounter";
import Todos from "./Todos";
import Navbar from "./Navbar";
import { userContext } from "./Context";

const User = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const module = await import("./User");
      resolve(module);
    }, 2000);
  });
});

const App = () => {
  // const [count,increment,decrement,res] = useCounter(0)

  //   const [count, dispatch] = useReducer(reducer, 0);
  // const [todos, SetTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Learn React Hooks",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Practice useState",
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Learn useEffect",
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Build a Todo App",
  //     completed: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Learn Custom Hooks",
  //     completed: false,
  //   },
  // ]);

  //   const handleClick = useCallback(() =>{
  //     console.log('clicked in function')
  //   },[secondCounter])

  // const handleChange = (id) => {
  //   const filteredTodos = todos.filter((todo) => todo.id !== id);

  //   const newTodo = {
  //     id: id,
  //     title: "changed title",
  //     completed: true,
  //   };

  //   const newUpdatedTodos = [...filteredTodos, newTodo];
  //   const sortedTodos = newUpdatedTodos.sort((a, b) => a.id - b.id);

  //   SetTodos(sortedTodos);
  // };

  const user = useContext(userContext)

  return (
    <div>
      <Navbar />
      <p>{user.name}</p>
      {/* <h1>{count}</h1>
      <button onClick={() =>dispatch({type:"Inc"})}>Increment</button>
      <button onClick={() =>dispatch({type:"Dec"})}>Decrement</button>
      <button onClick={() =>dispatch({type:"Reset"})}>Reset</button>
      <button onClick={() =>handleClick}>Click</button>
      <button onClick={() => setSecondCounter(secondCounter+ 1)}>Change second count value</button>
      
      <Child handleClick={handleClick} /> */}
      {/* <h1>My App</h1>

      <Suspense fallback={<Loading />}>
        <User />
      </Suspense> */}

      {/* {count}
      <button onClick={() => increment()}>Increment</button> */}

      {/* <Todos todos={todos} handleChange={handleChange} /> */}
    </div>
  );
};

export default App;
