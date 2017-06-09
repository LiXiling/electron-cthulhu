const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const d3 = require("d3")

let viewer
let editor
let c

function createWindow(singleWindow, view) {
  //Create browser window
  singleWindow = new BrowserWindow({ width: 800, height: 600, autoHideMenuBar: true })

  setWindowContent(singleWindow, view);
}

function setWindowContent(singleWindow, view) {
  //load the index.html of the app
  singleWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app', view, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  //Open the DevTools
  singleWindow.webContents.openDevTools()

  singleWindow.on('closed', () => {
    singleWindow = null
  })
}

function openWindows() {
  //createWindow(viewer, 'viewer');
  createWindow(editor, 'editor')
}

app.on('ready', openWindows)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('open-viewer', (event, arg) => {
  c = arg;
  setWindowContent(event.sender, 'viewer');
})

ipcMain.on('get-c-data', (event, arg) =>{
  event.returnValue = c;
})