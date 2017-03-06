/**
 * Created by arc on 3/5/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema(
    {
        category_name: {type: String, required: true},
        display_name: {type: String}
    }
);

//virtual url to browse category but not persisted
CategorySchema
    .virtual('url')
    .get(function(){
        return '/category/'+display_name;
    });

//Export model
module.exports = mongoose.model('Category', CategorySchema);