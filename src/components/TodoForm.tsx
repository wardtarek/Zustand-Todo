import { useState } from "react";
import { useAddTodo } from "../hooks/useTodoMutations";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addMutation = useAddTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addMutation.mutate(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-10 mt-10">
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
