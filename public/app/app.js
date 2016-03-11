(function() {
    "use strict";

    angular
        .module('app', ['app.users']);
})();
(function() {
    "use strict";
    angular
        .module('app.users', ['ui.router']); // include ui-router dependency
})();
(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

	function UserListController() {

		var vm = this;

		angular.extend(vm, {
			getSomeList: getSomeList,
			getSomething: getSomething
		});

		function getSomeList() {
			alert('8');
		}

		function getSomething() {
			alert('9');
		}
	}
})();
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

//# sourceMappingURL=app.js.map
