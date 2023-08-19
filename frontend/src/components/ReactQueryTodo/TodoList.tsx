import { useQuery } from "@tanstack/react-query";
import fetchData from "../../api/todos";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoTab from "./TodoTab";
import { todoFilterState } from "../../../src/recoilState/todoState";
import { useRecoilValue } from "recoil";
const TodoListBlock = styled.div`
  display: grid;
`;
const Todo = () => {
  const queryResult: any = useQuery(["fetchData"], fetchData, {
    onSuccess: (data) => {
      console.log("쿼리 패치 완료: ", data);
    },
  });

  const todoList = useRecoilValue(todoFilterState);

  const filteredData = queryResult.data
    ? queryResult.data.filter((todoItem: any) => {
        if (todoList === "Open") {
          return !todoItem.isCompleted;
        } else if (todoList === "Closed") {
          return todoItem.isCompleted;
        } else return queryResult.data;
      })
    : [];

  return (
    <>
      <TodoListBlock>
        <TodoTab />
        <TodoCreator />
        {queryResult.isLoading ? (
          <div>로딩 중... </div>
        ) : queryResult.isError ? (
          <div>Error: {queryResult.error.message}</div>
        ) : (
          filteredData.map((todoItem: any) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))
        )}
      </TodoListBlock>
    </>
  );
};

export default Todo;
