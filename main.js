
const electron = require('electron');
const fs = require('fs');
const path = require('path');
const { BrowserWindow, Menu, app, dialog } = electron;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function newTab() {
  win.webContents.send('ACTION', 'NEW_TAB');
}

function openFile() {
  dialog.showOpenDialog(function handleOpenFiles(fileNames) {
    if (fileNames === undefined) return;
    fs.readFile(fileNames[0], 'utf-8', function logFile(err, data) {
      win.webContents.send('ACTION', 'NEW_TAB', data);
    });
  });
}

function openPatientSettings() {
  win.webContents.send('ACTION', 'OPEN_PATIENT_SETTINGS');
}

function openMacroSettings() {
  win.webContents.send('ACTION', 'MACROS_OPEN');
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 1024, height: 768, icon: path.join(__dirname, 'fantasia.ico') });

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);

  // Emitted when the window is closed.
  win.on('closed', function onClose() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

function createMenus() {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open Template',
          accelerator: 'CmdOrCtrl+O',
          click: openFile,
        },
        {
          label: 'New Tab',
          accelerator: 'CmdOrCtrl+N',
          click: newTab,
        },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
        },
        {
          label: 'Quit',
          accelerator: 'Alt+Q',
          click: app.quit,
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Update Patient',
          accelerator: 'CmdOrCtrl+U',
          click() { openPatientSettings(); },
        },
        {
          label: 'Commit',
          accelerator: 'CmdOrCtrl+P',
        },
        {
          label: 'Edit Macros',
          accelerator: 'CmdOrCtrl+M',
          click() { openMacroSettings(); },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click(item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload();
          },
        },
        {
          label: 'Toggle Full Screen',
          accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
          click(item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
          },
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.webContents.toggleDevTools();
            }
          },
        },
      ],
    },
  ];

  const mainMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(mainMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
app.on('ready', createMenus);

// Quit when all windows are closed.
app.on('window-all-closed', function onAllClose() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function onActivate() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
