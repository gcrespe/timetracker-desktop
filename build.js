// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require('electron-winstaller');
// In this case, we can use relative paths

async function installer(){
    
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: 'app-win32-x64/',
            outputDirectory: 'myApplication-installers',
            authors: 'My App Inc.',
            exe: 'app.exe',
            description: 'alo alo'
    });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }

}


installer();
