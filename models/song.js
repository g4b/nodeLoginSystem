var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
    title: String,
    artist: String,
    year: Number,
    genre: String
});

var song = mongoose.model('Song', songSchema);

module.exports = {model: song, schema: songSchema};