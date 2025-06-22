import { create } from "zustand";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface PaginationState {
  limit: number;
  skip: number;
  setLimit: (limit: number) => void;
  setSkip: (skip: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  limit: 10,
  skip: 0,
  setLimit: (limit) => set({ limit }),
  setSkip: (skip) => set({ skip }),
}));
