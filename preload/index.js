const { contextBridge, ipcRenderer } = require('electron')
const handleSend = async (vue_params) => {
  let fallback = await ipcRenderer.invoke('sent-event', vue_params)
  return fallback
}
contextBridge.exposeInMainWorld('myApi', {
  handleSend: handleSend
  // 能暴露的不仅仅是函数，我们还可以暴露变量
})

