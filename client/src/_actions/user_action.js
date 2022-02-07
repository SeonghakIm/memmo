import axios from "axios";
import { AUTH_USER, LOGIN_USER, POST_MEMO, REGISTER_USER } from "./types";

export function loginUser(dataTosubmit) {
  const request = axios
    .post("/api/users/login", dataTosubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataTosubmit) {
  const request = axios
    .post("/api/users/register", dataTosubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function postMemo(dataTosubmit) {
  const request = axios
    .post("/api/board/write", dataTosubmit)
    .then((response) => response.data);

  return {
    type: POST_MEMO,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
