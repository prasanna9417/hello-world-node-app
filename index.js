const http = require('http')
const port = 3010

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify("Hello World"))
    }
})

server.listen(port, function(){
    console.log('listening on port', port)
})