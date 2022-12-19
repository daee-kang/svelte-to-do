import { writable, type Writable } from "svelte/store";
import { TodoStatus, type Todo, type Todos } from "./types";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "TODOS";

const updateLocalStorage = (todos: Todos) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const createTodos = () => {
  const storedTodos = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"
  ) as Todos;

  const { subscribe, set, update }: Writable<Todos> = writable(storedTodos);

  return {
    subscribe,
    add: (description: string) => {
      update((todos) => {
        const newTodo: Todo = {
          id: uuidv4(),
          description,
          status: TodoStatus.UNCOMPLETE,
        };
        const updated = [...todos, newTodo];
        updateLocalStorage(updated);
        return updated;
      });
    },
    remove: (id: string) =>
      update((todos) => {
        const filtered = todos.filter((todo) => todo.id !== id);
        updateLocalStorage(filtered);
        return filtered;
      }),
    clearAll: () => {
      set([]);
      updateLocalStorage([]);
    },
  };
};

export const todos = createTodos();

export const addTodoModalOpen = writable(false);
