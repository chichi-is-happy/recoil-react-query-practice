import { useState } from "react";
import { addTodo, fetchData, Todo } from "../../api/todos";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

const TodoCreator = () => {
  const [inputValue, setInputValue] = useState("");

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
        completed: false,
      });
    }
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

export default TodoCreator;
