import { api } from "./config";
import $store from "../store";

// TODO: use email
export function signup(name: string, pwd: string, email: string) {
  return new Promise((resolve, reject) => {
    api
      .post(
        "/users",
        {
          username: name,
          password: pwd
        },
        {
          headers: {
            "X-Parse-Revocable-Session": 1
          }
        }
      )
      .then(d => resolve(d))
      .catch(e => {
        if (!e.response) {
          e = { response: { data: { error: "Network error" } } };
        }
        reject(e);
      });
  });
}

export function login(name: string, pwd: string, rememberMe: boolean) {
  return new Promise((resolve, reject) => {
    api
      .post(
        "/login",
        {
          username: name,
          password: pwd
        },
        {
          headers: {
            // FIXME: Not tested.
            "X-Parse-Revocable-Session": rememberMe ? 1 : 0
          }
        }
      )
      .then(d => {
        console.log("login return data", d.data);
        $store.commit("updateUser", d.data);
        resolve(d);
      })
      .catch(e => {
        if (!e.response) {
          e = { response: { data: { error: "Network error" } } };
        }
        reject(e);
      });
  });
}

export function syncUser() {
  return new Promise((resolve, reject) => {
    api
      .get(`/users/${$store.state.user.id}`)
      .then(d => {
        $store.commit("updateUser", d.data);
        resolve(d);
      })
      .catch(e => {
        if (!e.response) {
          e = { response: { data: { error: "Network error" } } };
        }
        reject(e);
      });
  });
}
