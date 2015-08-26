(function(){
    'use strict'
    //again, getting our main app module and setting it to a var
    var app = angular.module('bitwiseBooks');
    //for this controller we need the scope, but also the $http service so we can make "server" calls
    //for this example we are just calling to a json file located inside our directory

    app.controller('BooksController',function($scope, BooksService){
        $scope.books = BooksService.books;

        console.log($scope.books);
    })
}());