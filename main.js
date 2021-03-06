'use strict';
var electron = require('electron');

// Module to control application life.
var app = electron.app;


// Module to create native browser window.
var BrowserWindow = electron.BrowserWindow;
// var Menu = electron.Menu;
// var Tray = electron.Tray;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
// var appIcon;

function createWindow() {
    let atomScreen = electron.screen;

    const notifWidth = 400;
    const notifHeight = 698;
    const screenInfo = atomScreen.getAllDisplays();
    const workArea = screenInfo[0].workArea;

  console.log(workArea);

    // Create the browser window.
    mainWindow = new BrowserWindow({
        x: workArea.width - (notifWidth),
        y: workArea.height - (notifHeight),
        frame: false,
        width: notifWidth,
        height: notifHeight,
        skipTaskbar: true,
        // hasShadow: false,
        //alwaysOnTop: true,
        transparent: true
    });

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    //mainWindow.loadURL('http://localhost:63342/ponification/ponyfication/index.html');

    // appIcon = new Tray('./img/pony0.png');
    // //var contextMenu = Menu.buildFromTemplate([
    // //    {label: 'Item1', type: 'radio'},
    // //    {label: 'Item2', type: 'radio'},
    // //    {label: 'Item3', type: 'radio', checked: true},
    // //    {label: 'Item4', type: 'radio'}
    // //]);
    // appIcon.setToolTip('Pony notif');
    //appIcon.setContextMenu(contextMenu);


    mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
