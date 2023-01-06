const http= require("http")

const server=http.createServer(function(req,res){
    const user={"name":"harsh"}
    res.write("<h1>server</h1>")
    // res.send({"message":"this is json format"})
    res.end(JSON.stringify(user))
})
server.listen(5050,()=>{
    console.log("server 5050 is running")
})
