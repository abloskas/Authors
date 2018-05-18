const mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3}
}, {timestamp:true});

module.exports = mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author');