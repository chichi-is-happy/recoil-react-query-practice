import { useState } from "react";
import { addTodo, fetchData, Todo } from "../../api/todos";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const CreatorBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  gap: 10px;
  height: 50px;
  outline: none;
  box-sizing: border-box;
  align-content: center;
`;

const Button = styled.button`
  border-radius: 4px;
  background-color: #fae2ea;
  color: white;
  align-items: center;
  padding: 1rem;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  padding: 10px;
`;
const TodoCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const queryClient = useQueryClient();

  const { data: todoList }: any = useQuery<Todo[], Error>(
    ["fetchData"],
    fetchData
  );

  const addMutation = useMutation(addTodo, {
    onSuccess: (data) => {
      queryClient.setQueryData(["fetchData"], (oldTodoList: any) => [
        ...oldTodoList,
        data,
      ]);
      setInputValue("");
    },
  });

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const lastTodo = todoList[todoList.length - 1];
      const newId = lastTodo ? lastTodo.id + 1 : 1;

      addMutation.mutate({
        id: newId,
        userId: 1,
        todoItem: inputValue,
        isCompleted: false,
      });
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !isComposing) {
      if (inputValue.trim() !== "") {
        const lastTodo = todoList[todoList.length - 1];
        const newId = lastTodo ? lastTodo.id + 1 : 1;

        addMutation.mutate({
          id: newId,
          userId: 1,
          todoItem: inputValue,
          isCompleted: false,
        });
        setInputValue("");
      }
    }
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <CreatorBlock>
      <Input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="할 일을 입력해 주세요."
        onKeyDown={handleEnterKey}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        autoFocus
      />
      <Button onClick={addItem}>Add</Button>
    </CreatorBlock>
  );
};

export default TodoCreator;
