const path=require('path')
const fs =require('fs')
const http =require('http')

const server=http.createServer((request,response) => {
    response.end()
    
})
const port = 5000

server.listen(port, () => {
    console.log(`server is running at port ${5000}`)
})

/*let filePath = path.join(__dirname, 'index.js')

console.log(filePath)*/
