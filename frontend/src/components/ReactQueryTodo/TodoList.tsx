import { useQuery } from "@tanstack/react-query";
import fetchData from "../../api/todos";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const Todo = () => {
  const queryResult: any = useQuery(["fetchData"], fetchData, {
    onSuccess: (data) => {
      console.log("쿼리 패치 완료: ", data);
    },
  });

  return (
    <>
      <TodoCreator />
      {queryResult.isLoading ? (
        <div>로딩 중... </div>
      ) : queryResult.isError ? (
        <div>Error: {queryResult.error.message}</div>
      ) : (
        queryResult.data.map((todoItem: any) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))
      )}
    </>
  );
};

export default Todo;
