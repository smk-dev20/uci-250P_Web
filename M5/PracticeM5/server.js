const express = require("express")
const app = express()
const port = 80
app.use(express.static(__dirname + '/'));
app.get("/", (request, response)=>{
    response.sendFile(__dirname+"/why-watch.html")
})

//listen on port 80
app.listen(port, ()=> console.info(`Listening on port ${port}`))