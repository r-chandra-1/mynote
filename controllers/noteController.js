/**
 * Created by arc on 3/5/17.
 */

var Note = require('../models/note');


//get all notes
exports.note_list = function(req, res, next){
    //res.send('not implemented: note list');

    Note.find({},'text category')
        .populate('category')
        .exec(function(err, result){
            if(err){return next(err)};
            //on success
            res.json(result);
        });

}

//get one
exports.note_get = function(req, res, next){
    //res.send('not implemented: note get');
    Note.findById(req.params.id)
        .exec(function(err, result){
            if(err){return next(err)};
            //on success
            res.json(result);
        });
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
