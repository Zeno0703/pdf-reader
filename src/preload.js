// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openDialog: (method, config) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.invoke("dialog", method, config)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
});
