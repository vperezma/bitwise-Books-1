(function(){
    'use strict'
    //again, getting our main app module and setting it to a var
    var app = angular.module('bitwiseBooks');
    //for this controller we need the scope, but also the $http service so we can make "server" calls
    //for this example we are just calling to a json file located inside our directory
    app.controller('BooksController',function($scope, $http){

        //we set a scoped variable  array to hold our books objects
        $scope.books = [];

        //we make an http get request to the url holding the data we need
        //then when we get a successful response we set the response to a var and push it into our array
        $http.get('../../books.json').success(function(res){
            var books = res;
            books.forEach(function(book){
                $scope.books.push(book);
            });
            //simple console.log to verify everything is working
            console.log($scope.books);
        });
    })
}());