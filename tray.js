const { Tray, app, ipcMain, BrowserWindow, screen } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, 'src' ,'assets', 'logoSimples.png')
TrayWindow = BrowserWindow

function InitTray(){

    MainTray = new Tray(iconPath)
    createWindow()
    
    MainTray.on("click", function(event){
        ipcMain.emit("tray-window-clicked", {window: TrayWindow, tray: MainTray})
        toggleTrayWindow()
    })

    alignWindow()


    console.log(TrayWindow.isVisible())

    function createWindow(){
        TrayWindow = new BrowserWindow({
            width: 250,
            height: 400,
            maxHeight: 400,
            maxWidth: 250,
            show: false,
            frame: false,
            fullscreenable: false,
            resizable: false,
            useContentSize: false,
            transparent: true,
            alwaysOnTop: true,
            webPreferences: {
                backgroundThrottling: false
            }
        })
    
        TrayWindow.setMenu(null)
        TrayWindow.loadURL(`http://localhost:3000/tray`)
    
        TrayWindow.on("blur", () => {
            if(!TrayWindow) return;
            if(!TrayWindow.webContents.isDevToolsOpened()) {
                TrayWindow.hide()
                ipcMain.emit("tray-window-hidden", {window: TrayWindow, tray: MainTray})
            }
        })
    
        TrayWindow.on("close", function(event) {
            if(!TrayWindow) return;
            event.preventDefault()
            TrayWindow.hide()
        })
    }
    
    function toggleTrayWindow() {
        if(!TrayWindow) return;
        console.log(TrayWindow.isVisible())
        if(TrayWindow.isVisible()) {
            TrayWindow.hide()
        }else {
            TrayWindow.show()
        }
    
        console.log(TrayWindow.isVisible())
        ipcMain.emit("tray-window-hidden", {window: TrayWindow, tray: MainTray})
    
    }

    function alignWindow(){
        if(!TrayWindow) return;

        const position = calculateWindowPositon();
        if(!position) return;

        TrayWindow.setBounds({
            width: 250,
            height: 400,
            x: position.x,
            y: position.y
        })
    }

    function calculateWindowPositon(){
        if(!MainTray) return;

        const screenbounds = screen.getPrimaryDisplay().size;
        const trayBounds = MainTray.getBounds()

        let trayPos = 4;
        trayPos = trayBounds.y > screenbounds.height / 2 ? trayPos : trayPos / 2
        trayPos = trayBounds.x > screenbounds.width / 2 ? trayPos : trayPos - 1

        let x = 0
        let y = 0

        x = Math.floor(trayBounds.x - 250)
        y = Math.floor(trayBounds.y - 400)
        
        return {x: x, y: y}

    }

}



module.exports = InitTray