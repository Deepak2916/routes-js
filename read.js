const http=require('http')
const rot=require('./routes')
console.log(rot.text)
const server=http.createServer(rot.handler)
server.listen(3000)