const { app, BrowserWindow } = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 700,
        frame: false
    })

    win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow); 