//## ����
const {app, BrowserWindow, ipcMain,Tray,Menu} = require('electron')

//## ��ֹ����������
let onlineStatusWindow,tray


//## δ��¼ǰ��������ͼ��


//## ready
app.on('ready', () => {
//���ش���������Ⱦ����,�Ա��ȡͨ��״̬
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`)
})


//## ��¼�󴴽�����ͼ��



//## ��������
ipcMain.on('online-status-changed', (event, status) => {
  console.log(status)
})