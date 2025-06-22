import { useTodoStore, type Todo } from "../store/todoStore";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div className="flex gap-10 justify-between items-center px-4 rounded-md border mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className={`${
          todo.completed ? "line-through" : ""
        } overflow-hidden text-ellipsis whitespace-nowrap max-w-[180px]`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
};

export default TodoItem;
