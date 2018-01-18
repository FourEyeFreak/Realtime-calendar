var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller:'EventsController',
            templateUrl: 'views/calender.html'
         })
        .when('/event/add',{
            controller:'EventsController',
            templateUrl: 'views/add_book.html'
        })
        .when('/event/edit/:id',{
            controller:'EventController',
            templateUrl: 'views/edit_event.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});