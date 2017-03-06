/**
 * Created by arc on 3/6/17.
 */

var Note = require('../models/note');
var Category = require('../models/category');
var async = require('async');


//index for notes and categories

exports.index =  function(req, res){
    //res.send('not implemented: index');
    async.parallel({
        note_count: function(callback){
            Note.count(callback);
        },
        category_count: function(callback){
            Category.count(callback);
        }
    }, function(err, results){
        res.json(results);
    });

}


