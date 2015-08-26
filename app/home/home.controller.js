(function(){

    'use strict';
//first we get our main app module
    var app = angular.module('bitwiseBooks');

    //then we set a controller property to it, we name the controller in the first argument, and in the second we set up
    //actual code used to control the view as a function, passing in anything we need for the controller to
    // function properly

    app.controller('HomeController',function($scope){
        $scope.welcome = "Welcome to Bitwise Books";
    })
}());