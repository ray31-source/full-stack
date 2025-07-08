const http = require('http')
const app = require('./main')
const server = http.createServer(app)
server.listen(5000,()=>{
    console.log("I am running");
    
})