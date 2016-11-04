var express = require("express")
var app = express()
var bodyParser = require("body-parser")


app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(bodyParser.json()) //handle json requests
app.use(bodyParser.urlencoded({extended: true})) // handle forms

app.get("/", (req, res) => {
  res.render("welcome")
})

app.post("/", (req, res) => {
  res.send(req.body.player_name)
})

app.get("/:numBottles?", (req, res) => {
  var numBottles = req.params.numBottles || 99
  res.render("index", {
    numBottles: parseInt(numBottles),
    next: numBottles - 1
  })
})


app.listen(2000, () => {
  console.log("app listening at http://localhost:2000/")
})
