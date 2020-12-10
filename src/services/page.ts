import { api } from "./config";
import $store from "../store";

export function uploadPage(formData: FormData) {
  return new Promise((resolve, reject) => {
    api
      .post(
        `/files/index.zip`,
        {
          formData
        },
        {
          headers: {
            "X-Parse-Revocable-Session": 1,
            "X-Parse-Session-Token": `${$store.state.sessionToken}`
          }
        }
      )
      .then(d => resolve(d))
      .catch(e => reject(e));
  });
}

export function getPageList() {
  return new Promise((resolve, reject) => {
    api
      .get(`/classes/UserPage`, {
        params: {
          where: {
            createdBy: $store.state.userId
          }
        },
        headers: {
          "X-Parse-Revocable-Session": 1,
          "X-Parse-Session-Token": `${$store.state.sessionToken}`
        }
      })
      .then(d => resolve(d))
      .catch(e => reject(e));
  });
}

// TODO:
export function updatePageConfig(data: string) {
  return new Promise((resolve, reject) => {
    api
      .post(
        "/page-config",
        {
          data
        },
        {
          headers: {
            "X-Parse-Revocable-Session": 1,
            "X-Parse-Session-Token": `${$store.state.sessionToken}`
          }
        }
      )
      .then(d => resolve(d))
      .catch(e => reject(e));
  });
}
