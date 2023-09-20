const SERVER_URL = process.env.REACT_APP_API || "http:localhost:1111";

export const URLS = {
  TODOS: SERVER_URL + "/api/v1/todos",
  SUBTASKS: SERVER_URL + "/api/v1/subtasks",
};
