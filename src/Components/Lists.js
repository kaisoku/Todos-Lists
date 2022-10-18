export default function Lists(props) {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <>
      <li key={props.id} className="box">
        <input type="checkbox" />
        {props.title} {" | "}
        <button type="button" onClick={onDeleteHandler.bind(null, props.id)}>
          delete
        </button>
      </li>
    </>
  );
}
