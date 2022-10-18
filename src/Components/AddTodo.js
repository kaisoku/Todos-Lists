import { useRef, Fragment } from "react";
import Classes from "./AddTodo.module.css";

export default function AddTodo(props) {
  const ref = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let inputValue = ref.current.value;
    const newTodo = {
      id: "t" + Math.round(Math.random() * 100),
      title: inputValue
    };
    props.onAdd(newTodo);
    ref.current.value = "";
  };
  return (
    <Fragment>
      <div className={Classes.container}>
        <form onSubmit={onSubmitHandler}>
          <input className={Classes.input} type="text" ref={ref} />
          <button className={Classes.button} type="submit">
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
}
