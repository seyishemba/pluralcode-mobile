angular.module("App")
.controller("IntermediateController", function ($scope, $ionicLoading, $ionicPopup, $state) {
	
	$scope.options = {
		
	};
	
	$scope.quick_enroll = function () {
		
		$state.go("tabs.classrooms");
	};


});