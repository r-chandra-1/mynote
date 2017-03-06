/**
 * Created by arc on 3/5/17.
 */

(function () {
    "use strict";

    var app = angular.module('noteapp');

    app.factory('NoteService', function ($http, $q) {

        var getCounts = function(){
            var deferred = $q.defer();
            $http.get('/api/')
                .success(function (response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(response, status, header, config) {
                    deferred.reject(response);
                });
            return deferred.promise;
        };
        var getAllNotes = function () {
            var deferred = $q.defer();
            $http.get('/api/note/')
                .success(function (response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(response, status, header, config) {
                    deferred.reject(response);
                });
           return deferred.promise;
        };
        var getAllCategories = function () {
            var deferred = $q.defer();
            $http.get('/api/category/')
                .success(function (response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(response, status, header, config) {
                    deferred.reject(response);
                });
            return deferred.promise;
        };
        return {
            getCounts: getCounts,
            getAllNotes: getAllNotes,
            getAllCategories: getAllCategories
        };
    });

})();

