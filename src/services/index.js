import axios from "axios";
const instance = axios.create();
const getTodos = async (apiUrl) => {
  try {
    const response = await instance.get(apiUrl + "/api/todos");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const postTodos = async (apiUrl, postData) => {
  try {
    return await instance.post(apiUrl + "/api/todos", postData);
  } catch (error) {
    console.log(error.message);
  }
};

export { getTodos, postTodos };
