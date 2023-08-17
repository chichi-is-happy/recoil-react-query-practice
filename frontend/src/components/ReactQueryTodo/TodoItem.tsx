import React, { useState } from "react";
import { editTodo, deleteTodo } from "../../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

interface TodoItemProps {
  id: number;
  todoItem: string;
  isCompleted: boolean;
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const TextInput = styled.input`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 19px;
  box-sizing: border-box;
  /* padding: 10px; */
`;

const Text = styled.div`
  flex: 1;
  width: 240px;
  font-size: 21px;
  color: #495057;
  box-sizing: border-box;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  gap: 10px;
  height: 50px;
  border-bottom: 1px solid #eee7ea;
  outline: none;
  box-sizing: border-box;
  align-content: center;
  padding: 1rem;
`;

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

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["fetchData"],
        (oldTodoList: TodoItemProps[] | undefined) => {
          if (oldTodoList) {
            return oldTodoList.filter((oldTodo) => oldTodo.id !== todoItem.id);
          }
          return [];
        }
      );
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
        todoItem: inputValue,
        isCompleted: todoItem.isCompleted,
      });
      setEditMode(false);
      setInputValue("");
    }
  };

  const deleteItem = () => {
    deleteMutation.mutate(todoItem.id);
  };

  return (
    <>
      <ItemBlock>
        {editMode === true && (
          <>
            <TextInput
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
            <Text>{todoItem.todoItem}</Text>

            <ButtonGroup>
              <button
                onClick={() => {
                  setInputValue(todoItem.todoItem);
                  setEditMode(true);
                }}
              >
                Edit
              </button>

              <input
                type="checkbox"
                checked={todoItem.isCompleted}
                onChange={toggleItemCompletion}
              />
              <button onClick={deleteItem}>X</button>
            </ButtonGroup>
          </>
        )}
      </ItemBlock>
    </>
  );
};
export default TodoItem;
