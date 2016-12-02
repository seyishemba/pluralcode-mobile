angular.module("App")
.controller("SignUpController", function ($scope, $ionicLoading, $ionicPopup, $state) {
	$scope.details = [
		{name: ''},
		{email: ''},
		{phone_number: ''},
		{password: ''},
		{confirm_password: ''}
	];
	
	$scope.next = function () {
		$ionicLoading.show({
			template: 'Please wait...',
		});
		if ($scope.details.password != $scope.details.confirm_password) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: "Error",
				template: "Passwords do not match!"
			});
			return;
		};
		if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
					$ionicLoading.hide();
                    $ionicPopup.alert({
                        title: "Internet Disconnected",
                        template: "The internet is disconnected on your device."
                    });
					return;
				}
		};
		$ionicLoading.hide();
		$state.go('signup2');
		console.log($scope.details.name);
		console.log($scope.details.email);
		console.log($scope.details.phone_number);
		console.log($scope.details.password);
	};
});
