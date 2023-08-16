import React from "react";
import { useRecoilState } from "recoil";
import { testTodoListState } from "../../recoilState/todoState";

interface Todo {
  userId: number;
  id: number;
  todoItem: string;
  completed: boolean;
}

interface TodoItemProps {
  todoItem: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(testTodoListState);

  const index = todoList.findIndex((listItem) => listItem === todoItem);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      todoItem: value,
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
      <input type="text" value={todoItem.todoItem} onChange={editItemText} />

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
  arr: Todo[],
  index: number,
  newValue: Todo
): Todo[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: Todo[], index: number): Todo[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default TodoItem;
