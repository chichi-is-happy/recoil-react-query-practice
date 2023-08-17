import axios from "axios";

export interface Todo {
  id: number;
  userId: number;
  todoItem: string;
  isCompleted: boolean;
}

// const endPoint = "https://koreanjson.com/todos";
const endPoint = "http://localhost:4000/todos";
export const fetchData = () => {
  return axios
    .get(`${endPoint}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log("에러: ", error);
      throw error;
    });
};

export const addTodo = (newTodo: Todo) => {
  return axios
    .post(endPoint, newTodo)
    .then((response) => response.data)
    .catch((error) => {
      console.log("에러: ", error);
      throw error;
    });
};

export const editTodo = (updateTodo: {
  id: number;
  todoItem: string;
  isCompleted: boolean;
}) => {
  return axios
    .put(`${endPoint}/${updateTodo.id}`, {
      todoItem: updateTodo.todoItem,
      isCompleted: updateTodo.isCompleted,
    })
    .then((response) => {
      console.log("요청이 성공했습니다.", response);
      return response.data;
    })
    .catch((error) => {
      console.log("에러: ", error);
      throw error;
    });
};

export const deleteTodo = (id: number) => {
  return axios
    .delete(`${endPoint}/${id}`)
    .then((response) => {
      console.log("요청이 성공했습니다.", response);
      return response.data;
    })
    .catch((error) => {
      console.log("에러: ", error);
      throw error;
    });
};

export default fetchData;
