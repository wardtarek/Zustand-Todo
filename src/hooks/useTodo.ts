import { useQuery } from "@tanstack/react-query";
import { usePaginationStore } from "../store/todoStore";


export const useTodos = () => {
  // const setTodos = useTodoStore((state) => state.setTodos);
  const { limit, skip } = usePaginationStore();
  const query = useQuery({
    queryKey: ["todos", { limit, skip }],
    queryFn: async () => {
      const res = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      return data.todos;
    },
  });

  // useEffect(() => {
  //   if (query.data) {
  //     setTodos(query.data);
  //   }
  // }, [query.data, setTodos]);

  return query;
};
