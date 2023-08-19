import { atom, selector } from "recoil";

type Todo = {
  id: number;
  userId: number;
  todoItem: string;
  isCompleted: boolean;
};

type DefaultValue = Todo[];

export const todoStateTest = atom<DefaultValue>({
  key: "TodoStateTest",
  default: [],
});

export const todoFilterState = atom({
  key: "todoFilterState",
  default: "All",
});

export const filteredTodoState = selector({
  key: "filteredTodoState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoStateTest);

    switch (filter) {
      case "Open":
        return list.filter((todo) => !todo.isCompleted);
      case "Closed":
        return list.filter((todo) => todo.isCompleted);
      default:
        return list;
    }
  },
});
