import { atom } from "recoil";

type Todo = {
  id: number;
  userId: number;
  todoItem: string;
  completed: boolean;
};

type DefaultValue = Todo[];

export const testTodoListState = atom<DefaultValue>({
  key: "testTodoListState",
  default: [],
});
