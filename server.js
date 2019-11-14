var mongoose = require('mongoose');

//data for now - so we don't have to have a model (database) yet 
var realData = { name: "Matt Albinson", username: "mattalbinson", password: "albymemes", favoriteFood: "vietnamese food"};

//adding Express 
var express = require('express');

//create an instance of Express and allow 
//node to easily grab items send by 
//your view like "req.body.data"
var app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
require('./routes/routes.js')(app);

//a get at the root.  this is run when you go to localhost:3000
app.get('/', express(), function(req, res) {
    res.send(realData);
});

//ok, start the server and be ready!
app.listen(3000);
console.log("Listening at localhost:3000");

mongoose.connect('mongodb+srv://ggfantacone:himralbinson@cluster0-vh0ja.mongodb.net/test?retryWrites=true&w=majority');