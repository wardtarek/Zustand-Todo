import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoStore } from "./store/todoStore";

function App() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="max-w-[600px] p-20">
      <h1>Todo List 📋</h1>
      <TodoForm />
      <div className="mt-20">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
