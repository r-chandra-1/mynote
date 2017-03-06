/**
 * Created by arc on 3/5/17.
 */

(function () {
    "use strict";

    var app = angular.module('noteapp');

    app.controller('NoteController', ['$scope', 'NoteService',
        function ($scope, NoteService) {

            $scope.message = "Hi this is the controller";

            NoteService.getCounts().then(function(result){
                $scope.numNotes = result.note_count;
                $scope.numCategories = result.category_count;
            });

            NoteService.getAllNotes().then(function(result){
                $scope.notes = result;
            });

            NoteService.getAllCategories().then(function(result){
                $scope.categories = result;
            });


        }
    ]);

})();
