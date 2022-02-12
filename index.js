const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", () => {
  let mainWindow = new BrowserWindow({});
  mainWindow.setMenu(null);
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "src/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
});
