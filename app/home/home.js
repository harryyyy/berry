'use strict';

angular.module('myApp.home', [
    'ngRoute',
        'ngAutocomplete'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.result = '';
    }]);