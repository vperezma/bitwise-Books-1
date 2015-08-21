(function(){
    'use strict'

    var app = angular.module('bitwiseBooks');

    app.controller('booksController',function($scope, $http){
        $scope.books = [];

        $http.get('../../books.json').success(function(){

        });


    })

}());