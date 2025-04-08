const http = require('http')
const fs = require('fs')

const dataSourcePath = 'data.txt'
const data = fs.readFileSync(dataSourcePath)

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    res.end(data)
}).listen(3000,()=>{console.log('hosted')})