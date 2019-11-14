var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    favoriteFood: String,
    age: String,
    songs: Array
});

var user = mongoose.model('User', userSchema);

module.exports = {model: user, schema: userSchema};
