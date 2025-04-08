const http = require('http')
const fs = require('fs')
const url = require('url')

const dataSourcePath = 'data.json'
const data = JSON.parse(fs.readFileSync(dataSourcePath))
console.log(data)

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url)
    if(parsedUrl.pathname === '/data') {
        res.writeHead(200,{
           'Content-Type':'application/json'
        })
        res.end(JSON.stringify(data))
        console.log(JSON.stringify(data))
    }
}).listen(3000,()=>{console.log('hosted')})