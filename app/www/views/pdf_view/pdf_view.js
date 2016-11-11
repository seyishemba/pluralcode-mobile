
//angular.module("App")
//.controller("PdfViewController", function($scope, $stateParams) {
//	console.log("I am reachable");
//    $scope.pdfUrl = $stateParams.doc_url;
	
	
//});
angular.module('App')
  .controller("PdfViewController", function($scope,$log, $stateParams) {
    $scope.pdfUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/relativity.pdf";
});