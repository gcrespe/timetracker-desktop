const { app, BrowserWindow, Tray, Menu } = require("electron")
const path = require('path');
const InitTray =  require('./tray')
const { resolve } = require('path') 

let isQuiting;
let tray;

app.on('before-quit', function () {
  isQuiting = true;
});

window = BrowserWindow

function createWindow(){
    window = new BrowserWindow({ 
        width: 1200,
        height: 700,
        frame: true,
        resizable: false,
        icon: __dirname + '/logo192.png'
    });

    window.loadURL("https://timetracker-desktop.herokuapp.com");
}

app.on("ready", () => {

    const iconPath = resolve(__dirname, 'src' ,'assets', 'logoSimples.png')

    createWindow()

    tray = new Tray(iconPath);

    tray.setContextMenu(Menu.buildFromTemplate([
        {
        label: 'Show App', click: function () {
            window.show();
        }
        },
        {
        label: 'Quit', click: function () {
            isQuiting = true;
            app.quit();
        }
        }
    ]));

    window.on('close', function (event) {
        if (!isQuiting) {
          event.preventDefault();
          window.hide();
          event.returnValue = false;
        }
      });
    //InitTray()
});
