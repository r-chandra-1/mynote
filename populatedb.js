#! /usr/bin/env node

//generates some initial data
//> node populatedb mongodb://localhost:27017/mynote

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Category = require('./models/category')
var Note = require('./models/note')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var categories = []
var notes = []

function categoryCreate(name, cb){
    var category = new Category(
        {
            category_name: name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '-'),
            display_name: name
        });

    category.save(function(err){
        if(err){
            cb(err, null);
            return;
        }

        console.log('New Category: '+category);
        categories.push(category);
        cb(null, category);
    });
}

function noteCreate(text, category, cb){

    var notedetail = {
        text: text
    };

    if(category != false) notedetail.category = category;

    var note = new Note(notedetail);

    note.save(function(err){
        if(err){
            cb(err, null);
            return;
        }

        console.log('New Note: '+note);
        notes.push(note);
        cb(null, note);
    });
}

function createCategories(cb){
    async.parallel([
        function(callback){
            categoryCreate('bought', callback);
        },
        function(callback){
            categoryCreate('talked', callback);
        },
        function(callback){
            categoryCreate('went', callback);
        }
    ],
        //optional callback
        cb);
}

function createNotes(cb){
    async.parallel([
        function(callback){
            noteCreate("flask for $24", categories[0], callback);
        },
        function(callback){
            noteCreate("to albertsons", categories[2], callback);
        }
    ],cb);
}

async.series([
        createCategories,
        createNotes
    ],
// optional callback
    function(err, results) {
        if (err) {
            console.log('FINAL ERR: '+err);
        }
        else {
            console.log('Instances: '+results);

        }
        //All done, disconnect from database
        mongoose.connection.close();
    });






