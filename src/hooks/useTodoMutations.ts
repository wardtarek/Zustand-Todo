import { useMutation } from "@tanstack/react-query";
import { useTodoStore, type Todo } from "../store/todoStore";

// Add
export const useAddTodo = () =>
  useMutation({
    mutationFn: async (text: string) => {
      const res = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: text,
          completed: false,
          userId: 5,
        }),
      });
      const data = await res.json();
      return data;
    },
    onSuccess: (newTodo) => {
      useTodoStore.getState().addTodo(newTodo);
    },
  });

// Update
export const useUpdateTodo = () =>
  useMutation({
    mutationFn: async (todo: Todo) => {
      const res = await fetch(`https://dummyjson.com/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      const data = await res.json();
      return data;
    },
    onSuccess: (updated) => {
      useTodoStore.getState().updateTodo(updated);
    },
  });

// Delete
export const useDeleteTodo = () =>
  useMutation({
    mutationFn: async (id: number) => {
      await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "DELETE",
      });
      return id;
    },
    onSuccess: (id) => {
      useTodoStore.getState().deleteTodo(id);
    },
  });
