const mongoose = require('mongoose');
var Author = require('../models/author');

function buildQueryHandler(res) {
    return function(err, result) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: result
            });
        }
    }
}

module.exports = {

    index: function(req, res){
        Author.find({}, buildQueryHandler(res));
    },
  
    create: function(req, res){
       var author = new Author({name: req.body.name}
        );
        author.save(buildQueryHandler(res));
    },

    update: function(req, res){
        console.log("server side", req.params.id);
        Author.updateOne({_id: req.params.id}, req.body, buildQueryHandler(res));

    },

    show: function(req, res) {
        Author.findById({_id: req.params.id}, buildQueryHandler(res));
    },

    destroy: function(req, res){
        Author.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    }
    
}