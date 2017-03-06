/**
 * Created by arc on 3/5/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = Schema({
    text: {type: String, required: true},
    category: {type: Schema.ObjectId, ref: 'Category', required: true},
    date_created: {type: Date, default: Date.now},
    date_updated: {type: Date}
});

NoteSchema.virtual('url').get(function(){
    return '/note/'+this._id;
});

module.exports = mongoose.model('Note', NoteSchema);