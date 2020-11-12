import { api } from "./config";

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
      .catch(e => reject(e));
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
      .then(d => resolve(d))
      .catch(e => reject(e));
  });
}
