(function(){

    'use strict';

    var app = angular.module('bitwiseBooks');

    app.service('BootstrapService', function($http, BooksService){
        function bootstrap(){
            return $http.get('../books.json').then(function(res){
                debugger;
               var data = res.data;
               BooksService.bootstrap(data);
            });
        }

        return {
            bootstrap: bootstrap
        }

    });
}());