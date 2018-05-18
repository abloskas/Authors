var mongoose = require('mongoose');
const authors = require('../controllers/authors');


module.exports = function(app){
    app.get("/authors", authors.index);
    app.get("/authors/:id", authors.show);
    app.post("/authors", authors.create);
    app.post("/authors/:id", authors.update);
    app.delete("/authors/:id", authors.destroy);
    }
    
