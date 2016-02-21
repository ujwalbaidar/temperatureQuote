'use strict';

angular.module('humidityApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'apps/dashboard/dashboard.html',
                controller: 'DashboardController'
            });
    });