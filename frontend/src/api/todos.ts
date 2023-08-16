import axios from "axios";

export interface Todo {
  id: number;
  userId: number;
  todoItem: string;
  completed: boolean;
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

export default fetchData;
