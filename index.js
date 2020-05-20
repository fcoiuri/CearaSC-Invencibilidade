const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./resources/views")

app.use(express.static(__dirname + '/resources'))
app.listen(process.env.PORT || 3000);

app.get("/", function(req, res) {
    res.render("home.ejs")
})