/*
Sherlin Mary Koshy (smkoshy) MSWE 250P
Reference URL : https://www.youtube.com/watch?v=A01KtJTv1oc
Reference Book : Modern Full-Stack Development Using TypeScript, React, Node.js, Webpack and Docker (Links to an external site.) by Frank Zammetti 
*/

const express = require("express")
const app = express()
const port = 80

//static content
app.use(express.static("img"))

app.get("", (request, response)=>{
    response.sendFile(__dirname+"/star_trek_women.html")
})

//listen on port 80
app.listen(port, ()=> console.info(`Listening on port ${port}`))