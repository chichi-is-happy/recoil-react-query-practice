import React, { useState } from "react";
import { editTodo } from "../../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TodoItemProps {
  id: number;
  todoItem: string;
  isCompleted: boolean;
}

const TodoItem: React.FC<{ todoItem: TodoItemProps }> = ({ todoItem }) => {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const queryClient = useQueryClient();

  const editMutation = useMutation(editTodo, {
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["fetchData"],
        (oldTodoList: TodoItemProps[] | undefined) => {
          if (oldTodoList) {
            return oldTodoList.map(
              (todo) => (todo.id === data.id ? data : todo),
              console.log("oldTodoList: ", oldTodoList)
            );
          }
          return [];
        }
      );
      setInputValue("");
    },
  });

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const handleEditSave = () => {
    editMutation.mutate({
      id: todoItem.id,
      todoItem: inputValue,
      isCompleted: todoItem.isCompleted,
    });
    setEditMode(false);
    setInputValue("");
  };

  const toggleItemCompletion = () => {
    editMutation.mutate({
      id: todoItem.id,
      todoItem: todoItem.todoItem,
      isCompleted: !todoItem.isCompleted,
    });
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      editMutation.mutate({
        id: todoItem.id,
        todoItem: todoItem.todoItem,
        isCompleted: !todoItem.isCompleted,
      });
      setEditMode(false);
      setInputValue("");
    }
  };

  // const deleteItem = () => {
  //   const newList = removeItemAtIndex(todoList, index);
  //   setTodoList(newList);
  // };

  return (
    <div>
      {editMode === true && (
        <>
          <input
            type="text"
            value={inputValue}
            onKeyDown={handleEnterKey}
            onChange={editItemText}
          />
          <button onClick={handleEditSave}>Save</button>
        </>
      )}
      {editMode === false && (
        <>
          <div>
            {todoItem.todoItem}
            <button
              onClick={() => {
                setInputValue(todoItem.todoItem);
                setEditMode(true);
              }}
            >
              Edit
            </button>
          </div>
        </>
      )}

      <input
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button>X</button>
    </div>
  );
};

export default TodoItem;
