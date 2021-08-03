const { app, BrowserWindow } = require("electron")
const path = require('path');

function App(){

    createWindow()
    const tray = require('./tray.js')
    
}

function createWindow(){
    const window = new BrowserWindow({ 
        width: 1200,
        height: 700,
        frame: false
    });

    window.loadURL("http://localhost:3000");
}

app.whenReady().then(App)