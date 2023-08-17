import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCounterState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isCompleted);
      case "Show Uncompleted":
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const list = get(todoListState);

    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.isCompleted).length;
    const totalUnCompletedNum = list.filter((item) => !item.isCompleted).length;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentCompleted,
    };
  },
});
