const { Tray, Menu } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, 'src' ,'assets', 'logoSimples.png')

function createTray(){
    const tray = new Tray(iconPath)
    
    tray.setToolTip('tnc')

    return tray
}

module.exports = createTray()