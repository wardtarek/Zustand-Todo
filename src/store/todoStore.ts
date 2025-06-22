import { create } from "zustand";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodoState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (updated: Todo) => void;
  deleteTodo: (id: number) => void;
}
interface PaginationState {
  limit: number;
  skip: number;
  setLimit: (limit: number) => void;
  setSkip: (skip: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  updateTodo: (updated) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === updated.id ? updated : t)),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));



export const usePaginationStore = create<PaginationState>((set) => ({
  limit: 10,
  skip: 0,
  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
}));