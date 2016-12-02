
angular.module("App")
.controller("ClassroomsController", function ($scope, $http, $ionicPopup, $ionicLoading, $state) {
	$scope.reg_no = "142058";
	$scope.password = "password";
	$ionicLoading.show({
      template: 'Loading classrooms...',
    });
	$http.get("http://pluralcode.zigmatechconsult.com/public/student/all_courses?regno=" + $scope.reg_no + "&password=" + $scope.password).success( function (data) {
		$scope.courses = data;
		$ionicLoading.hide();
	}).error (function (err) {
		$scope.error = "Could not load courses";
	});
	
	$scope.enroll = function (courseid) {
		$ionicLoading.show({
			template: 'Enrolling...',
		});
		$scope.course_id = courseid;
		console.log($scope.course_id);
		$http.get("http://pluralcode.zigmatechconsult.com/public/student/enroll_course/" + $scope.course_id + "?regno=" + $scope.reg_no + "&password=" + $scope.password)
			.success( function (data) {
		$ionicLoading.hide();
			if (data.error_code == 240) {
				
				var alertPopup = $ionicPopup.alert({
					title: 'Success',
					template: data.message
				});
				
			};
			if (data.error_code == 241) {
				// failure
				var alertPopup = $ionicPopup.alert({
					title: 'Failure',
					template: data.message
				});
			};
			if (data.error_code == 242) {
				// login failed
				var alertPopup = $ionicPopup.alert({
					title: 'Failure',
					template: data.message
				});
			};
			if (data.error_code == 243) {
				// data not found
				var alertPopup = $ionicPopup.alert({
					title: 'Not found',
					template: data.message
				});
			};
			if (data.error_code == 244) {
				//insufficient balance
				var confirmPopup = $ionicPopup.confirm({
					title: 'Insufficient balance',
					template: "Please, purchase credit."
				});
			};
			if (data.error_code == 245) {
				// unknown error
				var alertPopup = $ionicPopup.alert({
					title: 'Unknown error',
					template: data.message
				});
			};
		}).error (function (err) {
		});
	};
	
	$scope.view = function (course_id) {
		
		
		$scope.course_id = course_id;
	
		$state.go("tabs.view_course", {course_id:$scope.course_id, reg_no:$scope.reg_no, password:$scope.password});
	
		
		
		
	};
	
})