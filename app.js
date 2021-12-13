//jshint

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.get("/", function(req, res){
    
    var today = new Date();

    //var cureentDay = today.getDay();

    if (today.getDay() === 6 || today.getDate() === 0) {
        res.write("<h1>Yah it's the weekend!</h1>");
    } else {
       res.sendFile(__dirname + "/index.html");
    }
    
});







app.listen(3000, function(){
    console.log("server started on port 3000");
});
