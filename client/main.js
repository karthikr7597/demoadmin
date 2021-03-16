'use strict';
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/Employee', {
            templateUrl: 'views/employee.html',
            controller: 'EmployeeController'
        })
        .otherwise({
            redirectTo: '/login'
        });
});

