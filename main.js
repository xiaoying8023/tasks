const { app , BrowseWindow } = require('electron')
let win
function createWindow() {
    //创建浏览器窗口
    win = new BrowseWindow({ width:800,height : 600})

    //加载应用
    win.loadURL('http://localhost:3000')

    //打开开发者工具
    win.webContents.openDevTools()

    win.on('closed',() => {
        win = null
    })
}


//electron 会在初始化后并准备
//创建浏览器窗口是，调用这个函数
//部分API在ready事件触发后才能使用
app.on('ready',createWindow)

//当全部窗口关闭时退出
app.on('window-all-closed',() => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})


app.on('activate', ()=> {
    if (win === null){
        createWindow()
    }
})

