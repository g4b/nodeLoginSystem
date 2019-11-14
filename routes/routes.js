var thisUser;
var User = require('../models/user.js').model;
var Song = require('../models/song.js').model;

module.exports = function(app) {
//a post, this handles anything sent TO the url at localhost:3000/login
app.post('/login', function(req, res) {
    User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
        if (user){
            thisUser = user;
            res.render('home.ejs', {user: thisUser});
        } else {
            res.render('login.ejs', {error: 'Wrong login. Please try again.'});
        }
    });
});

app.get('/login', function(req, res){
    res.render('login.ejs', {error: ""});
});

app.post('/addInfo', function(req, res) {
    User.findOne({username: thisUser.username}, function(err, user){
        user.name = req.body.name;
        user.favoriteFood = req.body.favFood;
        user.age = req.body.age;
        user.save(function(err, newUser){
            res.render('home.ejs', {user: user});
        });
    });
});

app.post('/addSongs', function(req, res) {
    var newSong = new Song({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        year: req.body.year
    });

    User.findOne({username: thisUser.username}, function(err, user){
        console.log(user.songs);
        user.songs.push(newSong);
        user.save(function(err, user){
            console.log(user);
            res.render('home.ejs', {user: user});
        });
    });
});

app.get('/displayList', function(req, res) {
    User.find({}, function(err,users) {
        //console.log(users);
        res.render('displayList.ejs', {results: users});
    });
});

}