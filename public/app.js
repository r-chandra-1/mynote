/**
 * Created by arc on 3/5/17.
 */

(function () {

    var app = angular.module("noteapp", ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/#/hello', {
                templateUrl : 'views/index.html',
                controller : 'NoteController'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

})();
