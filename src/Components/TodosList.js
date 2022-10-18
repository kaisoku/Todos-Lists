import { useState } from "react";
import AddTodo from "./AddTodo";
import Lists from "./Lists";
import classes from "./TodosLists.module.css";

const DUMMY_TODOS = [
  {
    id: "t" + Math.round(Math.random() * 100),
    title: "Learn React"
  },
  {
    id: "t" + Math.round(Math.random() * 100),
    title: "Learn cooking"
  },
  {
    id: "t" + Math.round(Math.random() * 100),
    title: "Make Courses"
  }
];

export default function TodosList(props) {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((datas) => datas.json())
      .then((todos) => {
        console.log("Hussein", todos);
        setTodos(todos);
      });
  }, []); */

  const onAddHandler = (todos) => {
    setTodos((prevTodos) => {
      return [todos, ...prevTodos];
    });
  };

  const onDeleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1> Todos Lists </h1>
      <AddTodo todos={todos} onAdd={onAddHandler} />
      <div className={classes.container}>
        <ul className={classes.ul}>
          {todos.map((todo) => {
            return (
              <Lists
                id={todo.id}
                key={todo.id}
                title={todo.title}
                onDelete={onDeleteHandler}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
