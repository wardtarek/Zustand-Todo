import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-10 mt-10">
      <input
        type="text"
        placeholder="Add new one"
        className="px-2 rounded focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
