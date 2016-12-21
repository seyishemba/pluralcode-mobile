angular.module("App")
.controller("LoginController", function ($scope, $state) {
	
	$scope.login = function () {
	};
	$scope.signup = function () {
		$state.go("signup1");
	};
	$scope.$on('$ionicView.afterEnter', function(event) {
    $ionicSideMenuDelegate.canDragContent(false);
});
//enable side menu drag before moving to next view
$scope.$on('$ionicView.beforeLeave', function(event) {
    $ionicSideMenuDelegate.canDragContent(true);
});
})