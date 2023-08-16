import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../../recoilState/recoilState";
import { useState } from "react";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (): any => {
    setTodoList((oldTodoList): any => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
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

export default TodoItemCreator;
