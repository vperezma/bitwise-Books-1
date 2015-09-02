(function(){
  'use strict';

  var app = angular.module('bitwiseBooks');

  app.controller('BookController', function(book){
      var vm = this;
          vm.book = book;
  });
}());