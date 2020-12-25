const { app, BrowserWindow } = require("electron");

function createWindow() {
   const win = new BrowserWindow({ width: 1440, height: 2560 })
   win.loadURL('https://my.apps.factset.com/today/')
}

app.whenReady().then(createWindow);