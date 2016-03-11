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
                template: '<div>'+
                '<div style="background-color: red; display: block; width: 50px; height: 50px;"' +
                'ng-click="userListCtrl.getSomeList()"></div>' +
                '</div>',
                //templateUrl: '../src/app/user-list/user-list.html',
                controller: 'UserListController as userListCtrl'
            })
            .state('nextState', {
                url: '/next-state',
                template: '<div>'+
                '<div style="background-color: blue; display: block; width: 50px; height: 50px;"' +
                'ng-click="userListCtrl.getSomeList()"></div>' +
                '</div>',
                controller: 'UserListController as userListCtrl'
            });
    }
})();
