
angular.module("App")
.controller("ViewCourseController", function ($scope, $state, $stateParams, $ionicLoading, $http) {
	$ionicLoading.show({
			template: 'Loading course...',
		});
	$scope.course_id = $stateParams.course_id;
	$scope.reg_no = $stateParams.reg_no;
	$scope.password = $stateParams.password;
	$http.get("http://pluralcode.zigmatechconsult.com/public/student/view_course/" + $scope.course_id + "?regno=" + $scope.reg_no + "&password=" + $scope.password)
			.success( function (data) {
			$scope.lessons = data;
			$ionicLoading.hide();
	}).error( function (err) {
			console.log("could not load lessons")
	});
	
	$scope.load_doc = function (doc_url) {
		console.log("I am reachable here in view_course");
		$state.go("tabs.pdf_viewer", {doc_url:doc_url});
	};
	
});