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

        function find(book_id){
          return _.find(books, { id: book_id });
        }

       return {
         find: find,
         books: books,
         bootstrap: bootstrap
       }
    });
}());