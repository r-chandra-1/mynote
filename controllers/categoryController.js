/**
 * Created by arc on 3/5/17.
 */

var Category = require('../models/category');
var Note = require('../models/note');
var async = require('async');

//get all categories
exports.category_list = function(req, res, next){
    //res.send('not implemented: category list');
    Category.find()
        .exec(function(err, result){
            if(err){return next(err)};
            //on success
            res.json(result);
        });
}

//get one with details of notes tagged too
exports.category_get = function(req, res, next){
    //res.send('not implemented: category get');

    async.parallel({
        category: function(callback){
            Category.findById(req.params.id)
                .exec(callback);
        },
        category_notes: function(callback){
            Note.find({'category' : req.params.id})
                .exec(callback);
        }
    },function(err, result){
        if(err){return next(err)};
        //on success
        res.json(result);
    });
}

//create
exports.category_post = function(req, res, next){
    res.send('not implemented: category post');
}

//update
exports.category_put = function(req, res, next){
    res.send('not implemented: category put');
}

//delete
exports.category_delete = function(req, res, next){
    res.send('not implemented: category del');
}
