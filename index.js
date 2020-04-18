const express = require("express")
const app = express()


app.set("view engine", "ejs")
app.set("views", "./views")


app.listen(8080, function(){
    console.log("Servidor Online")
})

app.get("/", function(req, res){
    res.render("home.ejs")
})