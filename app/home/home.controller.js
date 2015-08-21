(function(){

    'use strict';

    var app = angular.module('bitwiseBooks');

    app.controller('HomeController',function($scope){
        $scope.welcome = "Welcome to Bitwise Books";
    })

}());