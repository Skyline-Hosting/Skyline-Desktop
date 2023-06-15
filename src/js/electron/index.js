const {app, BrowserWindow, contextBridge, dialog, protocol, ipcMain, ipcRenderer, globalShortcut, Menu, Notification, Tray, shell} = require('electron');
const { autoUpdater } = require("electron-updater");
const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)
const glasstron = require('glasstron');
const electron = require('electron');
const log = require('electron-log');
const appV = app.getVersion();
const path = require('path');
const url = require('url');
const os = require("os");
const fs = require("fs");
autoUpdater.logger = log;

// Extra information, mostly for debugging purposes
console.log('OS Type: ' + os.type());
console.log('OS Version: ' + os.release());
console.log('OS Platform: ' + os.platform());
console.log('Application Version: ' + appV)
console.log('Electron Version: ' + process.versions.electron);
console.log('Node Version: ' + process.versions.node);
console.log('Chromium Version: ' + process.versions.chrome);

global.devMode = true;
electron.app.commandLine.appendSwitch("enable-transparent-visuals"); // For Linux, not required for Windows or macOS. If removed, please remove "--enable-transparent-visuals" from start command in package.json file.
var osvar = process.platform; // For OS Detections, also look at https://github.com/KorbsStudio/electron-titlebar-os-detection

if (osvar == 'darwin') { // macOS
  app.whenReady().then(() => {
    global.blur = "blurbehind";
    global.frame = false;
    global.titleBarStyle = 'hiddenInset'; // Use native titlebar buttons instead
})}
else if(osvar == 'win32'){ // Windows
  app.whenReady().then(() => {
    global.blur = "blurbehind";
    global.frame = true; // Use custom titlebar
    global.titleBarStyle = 'hidden';
})}
else{ //Linux
  app.whenReady().then(() => {
    global.blur = "blurbehind";
    global.frame = true; // Use native titlebar instead
    global.titleBarStyle = 'hidden';
    app.disableHardwareAcceleration
    app.commandLine.appendSwitch
})}

function createWindow() {
  const mainWindow = new glasstron.BrowserWindow({
    width: 1250,
    height: 800,
    minWidth: 430,
    minHeight: 520,
    frame: global.frame,
    transparent: true,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    blur: true,
    blurType: global.blur,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      nodeIntegration: false,
      nodeIntegrationInSubFrames: false,
      webviewTag: true,
      devTools: global.devMode,
      enableRemoteModule: false,
      contextIsolation: true,
      nativeWindowOpen: true
    }
  })



  const splashWindow = new glasstron.BrowserWindow({
    frame: false,
    minimizable: false,
    maximizable: false,
    transparent: true,
    skipTaskbar: true,
    center: true,
    width: 382,
    height: 382,
    resizable: false,
    blur: true,
    blurType: global.blur,
    webPreferences: {
        devTools: global.devMode,
        nativeWindowOpen: true
    }
  })

  splashWindow.loadFile('src/html/splash/index.html')
  mainWindow.loadFile('src/index.html');

  ipcMain.on('minimize', () => {mainWindow.minimize()})
  ipcMain.on('maximize', () => {mainWindow.maximize()})
  ipcMain.on('restore', () => {mainWindow.restore()})
  ipcMain.on('close', () => {mainWindow.close()})

  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splashWindow.destroy();
    }, 5000);
    mainWindow.show();
  });

  tray = new Tray('./src/images/icons/app/32x32.png')
  tray.setToolTip('Skyline Desktop')
  tray.on('click', () => {
    mainWindow.show();
  });
  const contextMenu = Menu.buildFromTemplate([
    { 
      label: 'New Client Window',
      click: async() => {newCP()}
    },
    { 
      label: 'New Game Window',
      click: async() => {newGP()}
    },
    { 
      label: 'Check for Updates',
      click: async() => {autoUpdater.checkForUpdates()}
    },
    { 
      label: 'Quit',
      click: async() => {quitApp()}
    }
  ])
  tray.setContextMenu(contextMenu)

  // Auto Updater
  autoUpdater.on('update-available', (info) => {
    showNotification();
  })
  autoUpdater.on('error', (err) => {
    showNotificationFailed();
  })
  autoUpdater.checkForUpdates()

  function showNotification() {
    new Notification({ title: "Skyline Desktop", body: 'A new updating is downloading in the background...' }).show()
  }
  function showNotificationFailed() {
    new Notification({ title: "Skyline Desktop", body: 'Update failed to download.' }).show()
  }

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    setTimeout(() => {
      const dialogOpts = {
        type: 'question',
        buttons: ['Restart Now', 'Later'],
        title: 'Skyline Hosting Desktop Updater',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'An update is ready!'
      }
      dialog.showMessageBox(dialogOpts).then((returnValue) => {if (returnValue.response === 0) autoUpdater.quitAndInstall(false)})
    }, 4000)
  })
}

function newCP() {
  const newCP = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 320,
    movable: true,
    frame: global.frame,
    transparent: true,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      nodeIntegration: false,
      nodeIntegrationInSubFrames: false,
      webviewTag: true,
      devTools: global.devMode,
      contextIsolation: true,
      nativeWindowOpen: true
    }
  })
  newCP.loadFile('./src/html/new-window/client.html')
}

function newGP() {
  const newCP = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 320,
    frame: global.frame,
    movable: true,
    transparent: true,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      nodeIntegration: false,
      nodeIntegrationInSubFrames: false,
      webviewTag: true,
      devTools: global.devMode,
      contextIsolation: true,
      nativeWindowOpen: true
    }
  })
  newCP.loadFile('./src/html/new-window/panel.html')
}

function quitApp() {
  dialog.showMessageBox({
    title: 'Skyline Hosting Desktop',
    message: 'Trying to quit?',
    detail: 'Press Ctrl + Q to quit the app entirely.',
  }).then(box => {
    process.exit(0);
    console.log('Button Clicked Index - ', box.response);
    }).catch(err => {
    console.log(err)
  })
}

app.whenReady().then(() => {createWindow()})