const chokidar = require('chokidar')
const path = require('path')
// 启动一个wds
function runServer() {}

function onChange() {
  console.log('change')
}

// 启动配置监听
function runWatch(params) {
  const configPath = path.resolve(__dirname, './config.json')
  chokidar
    .watch(configPath)
    .on('change', onChange)
    .on('error', (error) => {
      console.error('file watch error:', error)
      process.exit(1)
    })
}

module.exports = function startServer(args, opts, cmd) {
  runServer()
  runWatch()
}
