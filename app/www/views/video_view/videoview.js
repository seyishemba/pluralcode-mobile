//angular.module("App")
//.controller("PdfViewController", function($scope, $stateParams) {
//	console.log("I am reachable");
//    $scope.videoUrl = $stateParams.video_url;
	
	
//});
angular.module('App')
  .controller("VideoViewController", function($scope,$sce,video,$stateParams) {
    //$scope.videoUrl = $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.mp4");
	video.addSource('mp4', "http://www.videogular.com/assets/videos/videogular.mp4");
});