/**
 * Created by arc on 3/5/17.
 */

var Note = require('../models/note');


//index for notes and categories

exports.index =  function(req, res, next){
    res.send('not implemented: index');
}

//get all notes
exports.note_list = function(req, res, next){
    res.send('not implemented: note list');
}

//get one
exports.note_get = function(req, res, next){
    res.send('not implemented: note get');
}

//create
exports.note_post = function(req, res, next){
    res.send('not implemented: note post');
}

//update
exports.note_put = function(req, res, next){
    res.send('not implemented: note put');
}

//delete
exports.note_delete = function(req, res, next){
    res.send('not implemented: note del');
}
