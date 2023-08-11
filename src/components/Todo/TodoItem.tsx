import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoilState/recoilState";

interface TodoItemProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoItem: React.FC<{ todoItem: TodoItemProps }> = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === todoItem);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={todoItem.text} onChange={editItemText} />

      <input
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

const replaceItemAtIndex = (
  arr: TodoItemProps[],
  index: number,
  newValue: TodoItemProps
): any => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoItemProps[], index: number): any => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default TodoItem;
