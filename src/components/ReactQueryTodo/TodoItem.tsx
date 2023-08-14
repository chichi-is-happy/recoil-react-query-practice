import React from "react";
import { useRecoilState } from "recoil";
import { testTodoListState } from "../../recoilState/todoState";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<{ todoItem: TodoItemProps }> = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(testTodoListState);

  const index = todoList.findIndex((listItem) => listItem === todoItem);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      title: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      completed: !todoItem.completed,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={todoItem.title} onChange={editItemText} />

      <input
        type="checkbox"
        checked={todoItem.completed}
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
