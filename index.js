const { app, BrowserWindow } = require("electron")


function createWindow(){

    const window = new BrowserWindow({ 
        width: 1200,
        height: 700,
        frame: false
    });

    window.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);