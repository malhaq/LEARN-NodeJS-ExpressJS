//http module
const http = require('http');
const server = http.createServer((req,res)=>{//req = request  , res = responce
    if(req.url === '/'){
        res.end('Welcome to the home page fathi');
    } 
    if(req.url === '/about'){
        res.end('Here is the about page for fathi');

    }
    res.end(`
        <h1>Ooops!</h1>
        <p>page not found :D</p>
        <a href="/">back home</a>
        `)
})

server.listen(5000)