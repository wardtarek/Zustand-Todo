import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodos } from "./hooks/useTodo";
import { usePaginationStore, type Todo } from "./store/todoStore";

function App() {
  const { data, isError, isLoading } = useTodos();
  const { limit, skip, setSkip } = usePaginationStore();
  // const todos = useTodoStore((state) => state.todos);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;

  const handleNext = () => setSkip(skip + limit);
  const handlePrev = () => setSkip(Math.max(0, skip - limit));
  return (
    <div className="max-w-[600px] p-20">
      <h1>Todo List 📋</h1>
      <TodoForm />
      <div className="mt-20">
        {data.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <button onClick={handlePrev} disabled={skip === 0}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
