/**
 * Created by arc on 3/5/17.
 */
var express = require('express');
var router = express.Router();

//require controllers
var category_controller = require('../controllers/categoryController');
var note_controller = require('../controllers/noteController');
var common_controller = require('../controllers/commonController');

//home page
router.get('/', common_controller.index);


//get all notes
router.get('/note', note_controller.note_list);

//get note by id
router.get('/note/:id', note_controller.note_get);

//create note
router.post('/note', note_controller.note_post);

//update note
router.put('/note/:id', note_controller.note_put);

//delete note
router.delete('/note/:id', note_controller.note_delete);



//get all categories
router.get('/category', category_controller.category_list);

//get category by id
router.get('/category/:id', category_controller.category_get);

//create category
router.post('/category', category_controller.category_post);

//update category
router.put('/category/:id', category_controller.category_put);

//delete category
router.delete('/category/:id', category_controller.category_delete);



module.exports = router;