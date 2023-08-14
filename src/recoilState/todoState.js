import { atom, selector } from "recoil";

export const testTodoListState = atom({
  key: "todoListState",
  default: [],
});
