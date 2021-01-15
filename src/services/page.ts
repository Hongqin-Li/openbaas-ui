import { api } from "./config";
import $store from "../store";

export function uploadPage(file: File) {
  return new Promise((resolve, reject) => {
    api
      .post(`/files/${file.name}`, file, {
        headers: {
          "X-Parse-Session-Token": `${$store.state.user.token}`
        }
      })
      .then(d => {
        console.log("upload page resp", d);
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

export function deletePage(pageId: string) {
  return new Promise((resolve, reject) => {
    api
      .delete(`/classes/UserFile/${pageId}`, {
        headers: {
          "X-Parse-Session-Token": `${$store.state.user.token}`
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

export function getMyPageUrl() {
  const uid: string = $store.state.user.id;
  return new Promise((resolve, reject) => {
    api
      .post(`/functions/page-url`, {
        uid
      })
      .then(d => {
        console.log("get my page url resp", d);
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

export function getPageList() {
  return new Promise((resolve, reject) => {
    api
      .get(`/classes/UserFile`, {
        headers: {
          "X-Parse-Revocable-Session": 1,
          "X-Parse-Session-Token": `${$store.state.user.token}`
        }
      })
      .then(d => {
        console.log("getPageList resp", d);
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
            "X-Parse-Session-Token": `${$store.state.user.token}`
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
            "X-Parse-Session-Token": `${$store.state.user.token}`
          }
        }
      )
      .then(d => resolve(d))
      .catch(e => reject(e));
  });
}
