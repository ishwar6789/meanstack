angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when ('/',{templateUrl:'/partials/main',controller:'mainctrl'});
});

angular.module('app').controller('mainctrl',function($scope){
    $scope.myVar ='Namaste Angular';
});