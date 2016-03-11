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