var app = angular.module('humidityApp', [
    'ui.bootstrap',
    'ngResource',
    'ui.router',
]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/login");
        $locationProvider.html5Mode(true);
    }
]);
