(function() {
    "use strict";

    angular
        .module('app.users')
        .config(userListRoutes);

    userListRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function userListRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/'); // go to main url if url is not found

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/redSquare.html',
                controller: 'UserListController as userListCtrl'
            })
            .state('nextState', {
                url: '/next-state',
                templateUrl: './views/blueSquare.html',
                controller: 'UserListController as userListCtrl'
            })
            .state('greenState', {
                url: '/green-state',
                templateUrl: './views/greenSquare.html',
                controller: 'GreenSquareController as greenSquareCtrl'
            });
    }
})();
