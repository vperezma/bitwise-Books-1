(function(){
  'use strict';

  var app = angular.module('bitwiseBooks');

  app.controller('BookController', function($scope, $stateParams, BooksService){
    $scope.book = BooksService.find($stateParams.bookId);

  });
}());