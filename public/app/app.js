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
		.controller('GreenSquareController', GreenSquareController);

	GreenSquareController.$inject = ['$state'];

	function GreenSquareController($state) {

		var vm = this;

		angular.extend(vm, {
			goToRed: goToRed
		});

		function goToRed() {
			$state.go('nextState');
		}
	}
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

//# sourceMappingURL=app.js.map
