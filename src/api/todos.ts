import axios from "axios";

const endPoint = "https://jsonplaceholder.typicode.com/todos";

const fetchData = () => {
  return axios
    .get(endPoint)
    .then((response) => response.data) // 데이터 반환 추가
    .catch((error) => {
      console.log("에러: ", error);
      throw error; // 에러 처리를 위해 에러 재throw
    });
};

export default fetchData;
