angular.module("App").controller("LoginController", function ($scope, $state) {
	
	$scope.login = function () {
		$state.go("login");
	};
});
