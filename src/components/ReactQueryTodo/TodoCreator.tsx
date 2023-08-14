import { useSetRecoilState, useRecoilValue } from "recoil";
import { testTodoListState } from "../../recoilState/todoState";
import { useState } from "react";

const TodoCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(testTodoListState);

  const addItem = (): any => {
    setTodoList((oldTodoList): any => [
      ...oldTodoList,
      {
        id: getId(),
        title: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
const getId = () => {
  return id++;
};

export default TodoCreator;
