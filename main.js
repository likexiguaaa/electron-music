const { app, BrowserWindow,ipcMain } = require('electron')
const createTray = require('./controller/tray')
const path = require('path')

require('./controller/changeWindowSize.js')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,//是否要自带窗口
    webPreferences: {
        preload: path.join(__dirname, './preload/index.js')
      }
  })

  // 下面的url为自己启动vite项目的url。
  win.loadURL('http://127.0.0.1:5173/')
  // 打开electron的开发者工具
  win.webContents.openDevTools({ mode: 'detach' })
  createTray(app,win)
}

ipcMain.handle('sent-event', (event,params) => {
    console.log(params)
    return '1111'
  })
  
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  
})




