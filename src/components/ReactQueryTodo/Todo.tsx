import { useQuery } from "@tanstack/react-query";
import fetchData from "../../api/todos";
import { testTodoListState } from "../../recoilState/todoState";
import { useRecoilValue } from "recoil";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const Todo = () => {
  const queryResult = useQuery(["fetchData"], fetchData, {
    onSuccess: (data) => {
      console.log("쿼리 패치 완료: ", data);
      return data;
    },
  });

  const todoList = useRecoilValue(testTodoListState);

  const handleButtonClick = () => {
    console.log("버튼이 클릭되었습니다.");
    console.log("데이터: ", queryResult.data);
    console.log("todoList: ", todoList);
  };

  return (
    <>
      <TodoCreator />
      {todoList.map((todoItem) => (
        <TodoItem todoItem={todoItem} />
      ))}
      <button onClick={handleButtonClick}>쿼리패치버튼</button>
    </>
  );
};

export default Todo;
