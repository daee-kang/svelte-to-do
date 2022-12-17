export enum TodoStatus {
  UNCOMPLETE = 0,
  COMPLETE,
}

export type Todo = {
  id: string;
  description: string;
  status: TodoStatus;
};

export type Todos = Todo[];
