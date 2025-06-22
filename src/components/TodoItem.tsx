import { type Todo } from "../store/todoStore";
import { useDeleteTodo, useUpdateTodo } from "../hooks/useTodoMutations";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const deleteMutation = useDeleteTodo();
  const updateMutation = useUpdateTodo();
  return (
    <div className="flex gap-10 justify-between items-center px-4 rounded-md border mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateMutation.mutate(todo)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.todo}
      </span>
      <button onClick={() => deleteMutation.mutate(todo.id)}>🗑️</button>
    </div>
  );
};

export default TodoItem;
