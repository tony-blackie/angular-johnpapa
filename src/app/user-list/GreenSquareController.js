(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('GreenSquareController', GreenSquareController);

	GreenSquareController.$inject = ['$state'];\

	function GreenSquareController($state) {

		var vm = this;

		angular.extend(vm, {

			goToRed: goToRed
		});

		function goToRed() {
			$state.go('home');
		}
	}
})();
