(function(){
    'use strict';

    var app = angular.module('bitwiseBooks');

    app.service('BooksService', function(){
        var books = [];

        function bootstrap(data){
            data.forEach(function(book){
               books.push(book);
            });
        }

       return {
           books: books,
           bootstrap: bootstrap
       }
    });
}());