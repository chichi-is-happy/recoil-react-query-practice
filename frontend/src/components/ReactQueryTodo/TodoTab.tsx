import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoFilterState } from "../../../src/recoilState/todoState";

const TodoTab = () => {
  const [todoList, setTodoList] = useRecoilState(todoFilterState);

  const updateFilter = ({ target: { value } }: any) => {
    setTodoList(value);
  };

  return (
    <>
      <select value={todoList} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>
    </>
  );
};

export default TodoTab;
