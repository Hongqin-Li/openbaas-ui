import { api } from "./config";
import $store from "../store";

export function uploadPage(file: File | undefined) {
  return new Promise((resolve, reject) => {
    api
      .post(`/files/index.zip`, file, {
        headers: {
          "X-Parse-Session-Token": `${$store.state.sessionToken}`
        }
      })
      .then(d => resolve(d))
      .catch(e => {
        if (!e.response) {
          e = { response: { data: { error: "Network error" } } };
        }
        reject(e);
      });
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
      .catch(e => {
        if (!e.response) {
          e = { response: { data: { error: "Network error" } } };
        }
        reject(e);
      });
  });
}

export function deployPage(url: string) {
  return new Promise((resolve, reject) => {
    api
      .post(
        `/functions/deploy-page`,
        {
          url
        },
        {
          headers: {
            "X-Parse-Revocable-Session": 1,
            "X-Parse-Session-Token": `${$store.state.sessionToken}`
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
