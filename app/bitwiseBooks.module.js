(function(){
    'use strict';

    var app = angular.module('bitwiseBooks',['ui.router','ui.bootstrap',
                                            'ui.bootstrap.tpls']);


    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('BitwiseBooks',{
            abstract:true,
            template: '<ui-view>'
        })
            .state('bitwiseBooks.home',{
                url:'/',
                controller:homeController,
                templateUrl: home/home.html
            })
            .state('bitwiseBooks.books',{
                url:'/books',
                controller: BooksController,
                templateUrl: books/books.html
            })

        $urlRouterProvide.otherwise('/');
    })

}());