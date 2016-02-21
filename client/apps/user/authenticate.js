'use strict';

angular.module('humidityApp')
    .config(function($stateProvider) {
        $stateProvider
           .state('login', {
                url: '/login',
                templateUrl: '/apps/user/login.html',
                controller: 'LoginController'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/apps/user/signup.html',
                controller: 'SignupController'
            });
    });