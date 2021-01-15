import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:1337/parse",
  baseURL: "http://localhost:8086",
  headers: { "X-Parse-Application-Id": "myAppId" }
});
