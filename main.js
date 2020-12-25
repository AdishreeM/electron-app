const { app, BrowserWindow } = require("electron");

function createWindow() {
   const win = new BrowserWindow({ fullscreen: true });
   win.loadURL("https://my.apps.factset.com/today/");
}

app.whenReady().then(createWindow);
